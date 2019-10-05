import { useState, useEffect } from "react";
import edamam, { KEY, ID } from "../api/edamam";

const useRecipes = query => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchRecipes = async query => {
    setLoading(true);
    const response = await edamam.get("/search", {
      params: { q: query, app_id: ID, app_key: KEY }
    });

    console.log(response.data.hits);
    setRecipes(response.data.hits);
    setLoading(false);
  };

  useEffect(() => {
    fetchRecipes(query);
  }, [query]);

  return [recipes, isLoading];
};

export default useRecipes;
