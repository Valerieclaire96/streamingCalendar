import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

export default function Recipe() {
  const [meal, setMeal] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function getMeal() {
      let response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
      );
      let data = await response.json();
      setMeal(data.meals[0]);
    }
    getMeal();
  }, []);

  console.log(meal);
  return (
    <div className="d-flex justify-content-center">
      <img src={meal?.strMealThumb} />
      <h1>{meal?.strMeal}</h1>
      <h6>{meal?.strCategory}</h6>
      <h6>{meal?.strArea}</h6>
      <ul>
        <li>
          {meal?.strIngredient1} - {meal?.strMeasure1}
        </li>
        <li>
          {meal?.strIngredient2} - {meal?.strMeasure2}
        </li>
        <li>
          {meal?.strIngredient3} - {meal?.strMeasure3}
        </li>
        {typeof meal?.strIngredient4 !== "null" ||
        meal?.strIngredient4 !== "" ? (
          <li>
            {meal?.strIngredient4} - {meal?.strMeasure4}
          </li>
        ) : null}
        {typeof meal?.strIngredient5 !== "null" ||
        meal?.strIngredient5 !== "" ? (
          <li>
            {meal?.strIngredient5} - {meal?.strMeasure5}
          </li>
        ) : null}
        {typeof meal?.strIngredient6 !== "null" ||
        meal?.strIngredient6 !== "" ? (
          <li>
            {meal?.strIngredient6} - {meal?.strMeasure6}
          </li>
        ) : null}
        {typeof meal?.strIngredient7 !== "null" ||
        meal?.strIngredient7 !== "" ? (
          <li>
            {meal?.strIngredient7} - {meal?.strMeasure7}
          </li>
        ) : null}
        {typeof meal?.strIngredient8 !== "null" ||
        meal?.strIngredient8 !== "" ? (
          <li>
            {meal?.strIngredient8} - {meal?.strMeasure8}
          </li>
        ) : null}
        {typeof meal?.strIngredient9 !== "null" ||
        meal?.strIngredient9 !== "" ? (
          <li>
            {meal?.strIngredient9} - {meal?.strMeasure9}
          </li>
        ) : null}
        {typeof meal?.strIngredient10 !== "null" ||
        meal?.strIngredient10 !== "" ? (
          <li>
            {meal?.strIngredient10} - {meal?.strMeasure10}
          </li>
        ) : null}
        {typeof meal?.strIngredient11 !== "null" ||
        meal?.strIngredient11 !== "" ? (
          <li>
            {meal?.strIngredient11} - {meal?.strMeasure11}
          </li>
        ) : null}
        {typeof meal?.strIngredient12 !== "null" ||
        meal?.strIngredient12 !== "" ? (
          <li>
            {meal?.strIngredient12} - {meal?.strMeasure12}
          </li>
        ) : null}
        {typeof meal?.strIngredient13 !== "null" ||
        meal?.strIngredient13 !== "" ? (
          <li>
            {meal?.strIngredient13} - {meal?.strMeasure13}
          </li>
        ) : null}
        {typeof meal?.strIngredient14 !== "null" ||
        meal?.strIngredient14 !== "" ? (
          <li>
            {meal?.strIngredient14} - {meal?.strMeasure14}
          </li>
        ) : null}
        {typeof meal?.strIngredient15 !== "null" ||
        meal?.strIngredient15 !== "" ? (
          <li>
            {meal?.strIngredient15} - {meal?.strMeasure15}
          </li>
        ) : null}
        {typeof meal?.strIngredient16 !== "null" ||
        meal?.strIngredient16 !== "" ? (
          <li>
            {meal?.strIngredient16} - {meal?.strMeasure16}
          </li>
        ) : null}
        {typeof meal?.strIngredient17 !== "null" ||
        meal?.strIngredient17 !== "" ? (
          <li>
            {meal?.strIngredient17} - {meal?.strMeasure17}
          </li>
        ) : null}
        {typeof meal?.strIngredient18 !== "null" ||
        meal?.strIngredient18 !== "" ? (
          <li>
            {meal?.strIngredient18} - {meal?.strMeasure18}
          </li>
        ) : null}
        {typeof meal?.strIngredient19 !== "null" ||
        meal?.strIngredient19 !== "" ? (
          <li>
            {meal?.strIngredient19} - {meal?.strMeasure19}
          </li>
        ) : null}
        {typeof meal?.strIngredient20 !== "null" ||
        meal?.strIngredient20 !== "" ? (
          <li>
            {meal?.strIngredient20} - {meal?.strMeasure20}
          </li>
        ) : null}
      </ul>
      <video width="320" height="240" controls>
        <source src={meal?.strYoutube} />
      </video>
      <p>{meal?.strInstructions}</p>
      <p>
        {meal?.strTags},{meal?.strSource},{meal?.strImageSource},
        {meal?.dateModified}
      </p>
    </div>
  );
}
