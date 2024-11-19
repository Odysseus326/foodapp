import { useState, useEffect } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "077ca198a30b48439de34106d2c2c729"; // Make environment variable for security

export default function Search({ setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`); // JS method for making an API call, returns .json
      const data = await res.json(); // Decodes json
      await setFoodData(data.results);
    }
    fetchFood(); // useEffects are defined and called in the same place
  }, [query]); // Syntax of useEffect hook
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
