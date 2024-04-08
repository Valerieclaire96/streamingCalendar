import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export default function Profile() {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({})

  useEffect(() => {
    async function getUser() {
      await actions.getUser()
      setUser(store.user)
    }
    getUser()
  } , [])

  return (
    <div className="container">
      <div>
        {user?.name}
      </div>
      <div className="savings"></div>
      <div className="leftover"></div>
    </div>
  );
}
