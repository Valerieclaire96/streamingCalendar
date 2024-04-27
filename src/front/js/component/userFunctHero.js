import React from "react";
import menu from "../../img/menu.png";
import "../../styles/hero.css";

export default function UserFunctHero() {
  return (
    <div className="userHero mt-5 hero d-flex" >
      <div className="selection">
        <div className="selection-icon mx-auto mb-3">
        <img height="30px" src={menu} />
        </div>
        <h5>Create Menus</h5>
      </div>
      <div className="selection">
        <div className="selection-icon mx-auto mb-3">
        <img height="30px" src={menu} />
        </div>
        <h5>Search from Thousands of Recipes</h5>
      </div>
      <div className="selection">
        <div className="selection-icon mx-auto mb-3">
        <img height="30px" src={menu} />
        </div>
        <h5>Contribute Your Own Creations</h5>
      </div>
      <div className="selection">
        <div className="selection-icon mx-auto mb-3">
        <img height="30px" src={menu} />
        </div>
        <h5>Streamline Your Grocery List</h5>
      </div>
    </div>
  );
}
