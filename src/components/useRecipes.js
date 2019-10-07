import { useState, useEffect } from "react";
import edamam, { KEY, ID } from "../api/edamam";

const useRecipes = query => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setLoading] = useState(false); //for displaying UI loader

  const fetchRecipes = async query => {
    setLoading(true);
    try {
      const response = await edamam.get("/search", {
        params: { q: query, app_id: ID, app_key: KEY, to: 9 }
      });
      //console.log(response.data.hits);
      setRecipes(response.data.hits);
      setLoading(false);
    } catch (err) {
      alert(`Something wrong... ${err}`);
    }
  };

  useEffect(() => {
    //render when query changes
    fetchRecipes(query);
  }, [query]);

  return [recipes, isLoading];
};

export default useRecipes;
