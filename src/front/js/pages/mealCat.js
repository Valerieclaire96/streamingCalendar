import React, { useState, useEffect, useContext } from "react";
import PictureCard from "../component/pictureCard";
import { useParams } from "react-router-dom";

export default function MealCat() {
  const [category, setCategory] = useState();
  const { cat } = useParams();

  useEffect(() => {
    async function getCategories() {
      let response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + cat
      );
      let data = await response.json();
      setCategory(data.meals);
    }
    getCategories();
  }, []);

  return (
    <div className="d-flex justify-content-center flex-wrap pt-5">
      {category?.map((category, index) => (
        <div key={index} style={{ width: "25rem" }}>
          <PictureCard
            img={category.strMealThumb}
            title={category.strMeal}
            btnMsg={"View Recipe"}
            link={`/meals/${category.idMeal}`}
          />
        </div>
      ))}
    </div>
  );
}
