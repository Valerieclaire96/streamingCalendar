import React from "react";
import { Link } from "react-router-dom";
export default function PictureCard(props) {
  return (
    <div className="card shadow p-3 mb-5 rounded gradient-orange" style={{width: "18rem"}}>
      <img src={props.img} className="card-img-top border imgbackground border-dark" alt="..." />
      <div className="card-body text-center">
        <h2 className="card-text">
         {props.title}
        </h2>
        <Link to={props.link} className="btn accent">{props.btnMsg}</Link>
      </div>
    </div>
  );
}
