import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/nav.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  return (
    <nav className="navbar">
      <div className="container">
        <h1>Words</h1>
        {!store.user ? (
         <div></div>
        ) : (
          <button className="btn btn-info" onClick={() => actions.logout()}>
            Logout
          </button>
        )}
      </div>
      <p>more word</p>
    </nav>
  );
};
