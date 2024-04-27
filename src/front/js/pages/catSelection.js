import React, { useState, useEffect } from "react";
import PictureCard from "../component/pictureCard";

export default function CatSelection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    getCategories();
  }, []);

  return (
    <div className="d-flex justify-content-center flex-wrap pt-5">
      {categories.map((category, index) => {
        if (category.strCategory !== "Goat" && category.strCategory !== "Lamb") {
          return (
            <div key={index} style={{ width: "25rem" }}>
              <PictureCard
                img={category.strCategoryThumb}
                title={category.strCategory}
                btnMsg={"View All"}
                link={`/category/${category.strCategory}`}
              />
            </div>
          );
        } else {
          return null; // Skip rendering for "Goat" category
        }
      })}
    </div>
  );
}
