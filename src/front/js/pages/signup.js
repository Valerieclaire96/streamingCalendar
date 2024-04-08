import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/signup.css";

export default function Signup() {
  const { store, actions } = useContext(Context);
  const [userInfo, setUserInfo] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value
    }));
  };

  const signup = (e) => {
    e.preventDefault();
    actions.createUser(userInfo);
  };

  return (
    <div className="whole-wheat text-center">
      <h1>Sign up today!</h1>
      <div className="signupContainer">
        <form>
          <div className="row g-3 align-items-center">
            <label htmlFor="name" className="col-form-label">
              Name
            </label>
            <input
              type="text"
              className="mt-0"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
            />
          </div>
          <div className="row g-3 align-items-center">
            <label htmlFor="email" className="col-form-label">
              Email
            </label>
            <input
              type="text"
              id="inputPassword6"
              className="mt-0"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
            />
          </div>
          <div className="row g-3 align-items-center">
            <label htmlFor="inputPassword6" className="col-form-label">
              Password
            </label>
            <input
              type="password"
              id="inputPassword6"
              className="mt-0"
              name="password"
              value={userInfo.password}
              onChange={handleChange}
            />
            <div>
              <span id="passwordHelpInline" className="form-text">
                Must be 8-20 characters long.
              </span>
            </div>
          </div>
          <div className="row g-3 align-items-center">
            <button className="btn btn-info" onClick={(e) => signup(e)}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
