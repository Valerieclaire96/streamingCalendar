from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            # do not serialize the password, it's a security breach
        }

class MonthlyPlan(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    user = db.relationship("User", foreign_keys=[user_id])
    month = db.Column(db.String(80), nullable=False)
    year = db.Column(db.Integer, nullable=False)
    income = db.Column(db.String(80), nullable=False)
    necessary_bills = db.Column(db.String(80), nullable=False)
    necessary_bills_amount = db.Column(db.Integer, nullable=False)
    necessary_purchases = db.Column(db.String(80), nullable=False)
    necessary_purchases_amount = db.Column(db.Integer, nullable=False)
    other_purchases = db.Column(db.String(80), nullable=True)
    other_purchases_amount = db.Column(db.Integer, nullable=True)
    saving_purpose = db.Column(db.String(80), nullable=True)
    savings = db.Column(db.Integer, nullable=True)

    def __repr__(self):
        return f'<MonthlyPlan {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "month": self.month,
            "year": self.year,
            "income": self.income,
            "necessary_bills": self.necessary_bills,
            "necessary_bills_amount": self.necessary_bills_amount,
            "necessary_purchases": self.necessary_purchases,
            "necessary_purchases_amount": self.necessary_purchases_amount,
            "other_purchases": self.other_purchases,
            "other_purchases_amount": self.other_purchases_amount,
            "saving_purpose": self.saving_purpose,
            "savings": self.savings,
        }
