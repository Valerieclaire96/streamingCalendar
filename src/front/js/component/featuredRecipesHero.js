import React from "react";
import "../../styles/hero.css";
import { Link } from "react-router-dom";
export default function FeaturedRecipesHero() {
  return (
    <div className="mx-auto text-center feat-recipe-shell mt-5 hero">
      <div className="mx-auto feat-recipe d-flex">
        <div className="my-auto">
          <h1>Featured Recipe Name</h1>
          <p className="details mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="btn-container d-flex justify-content-around mx-auto">
            <Link to={"/"} className="btn btn-main">Go To Recipe</Link>
            <Link to={"/"} className="btn btn-second">Add to Meals</Link>
          </div>
        </div>
          <img
            className="hero-pic-one"
            src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/6/12/3/FNM070116_Penne-with-Vodka-Sauce-and-Mini-Meatballs-recipe_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1465939620872.jpeg"
          />
      </div>
    </div>
  );
}
