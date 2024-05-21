"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from datetime import datetime, timedelta
import os 
import hashlib

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/signup', methods=['POST'])
def create_account():
    request_body = request.get_json()
    email = request_body.get('email')
    password = request_body.get('password')
    name = request_body.get('name')

    if not request_body["name"]:
        return jsonify({"msg": "Name is required"}), 400
    if not request_body["email"]:
        return jsonify({"msg": "Email is required"}), 400
    if not request_body["password"]:
        return jsonify({"msg": "Password is required"}), 400

    user = User.query.filter_by(email=email).first()
    if user is not None:
        return jsonify({'message': 'User already exists'}), 400

    new_user = User(email=email, password=password, name=name)
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.serialize()), 201

@api.route('/login', methods=['POST'])
def login():
    request_body = request.get_json()
    email = request_body.get('email')
    password = hashlib.sha256(body['password'].encode("utf-8")).hexdigest()
    print(email, password)
    user = User.query.filter_by(email=email, password=password).first()
    if user is not None:
        expiration = timedelta(days=1)
        access_token = create_access_token(identity= user.id, expires_delta= expiration)
        return jsonify(access_token=access_token, user=user.serialize())

    return jsonify({"message": "User doesn't exists"}), 400

@api.route('/user', methods=['GET'])
@jwt_required()
def get_user():
    id = get_jwt_identity()
    user = User.query.filter_by(id=id).first()

    if user is not None:
        return jsonify(user.serialize()), 200

    return jsonify({"message": "Uh-oh"}), 400

