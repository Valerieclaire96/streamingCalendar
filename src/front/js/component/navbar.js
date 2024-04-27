import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/nav.css";
import logo from "../../img/logo.jpeg";

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
    <nav className="navbar navbar-expand-lg bg-body-tertiary text-light">
      <div className="container-fluid">
        <a href="/" style={{ margin: "-10px 0 -10px 0" }}>
          <img src={logo} width="70px" />
        </a>
        <div className="float-end">
          <Link to={"/categories"} className="btn btn-pink text-light mx-3">
            Categories
          </Link>
          {!store.user ? (
            <button className="btn btn-pink">
              <Link to={"/login"} className="text-light text-decoration-none">
                Login
              </Link>
            </button>
          ) : (
            <button className="btn btn-pink" onClick={() => actions.logout()}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
