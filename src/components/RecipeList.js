import React from "react";
import useRecipes from "./useRecipes";

const RecipeList = ({ query }) => {
  const [recipes, isLoading] = useRecipes(query);

  const renderList = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul style={{ listStyle: "none" }}>
          {recipes.map((recipe, index) => (
            <li key={index}>
              <h2>{recipe.recipe.label}</h2>
              <ul style={{ listStyle: "none" }}>
                {recipe.recipe.ingredientLines.map((el, index) => (
                  <li key={index}>{el}</li>
                ))}
              </ul>
              <p>Calories: {Math.floor(recipe.recipe.calories)}</p>
              <img src={recipe.recipe.image} alt="" />
            </li>
          ))}
        </ul>
      );
    }
  };

  return <div>{renderList()}</div>;
};

export default RecipeList;
