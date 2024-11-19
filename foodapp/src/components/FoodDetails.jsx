import { useEffect, useState } from "react"; // Can import multiple things from the same location in one line
import ItemList from "./ItemList";
import styles from "./foodDetails.module.css";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "077ca198a30b48439de34106d2c2c729";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log("" + data);
      setFood("Food selected: " + data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
      </div>

      <div className={styles.recipeDetails}>
        <span>
          <strong>⏲️ {food.readyInMinutes} minutes</strong>
        </span>
        <span>
          <strong>👨‍👧 Serves {food.servings}</strong>
        </span>
        <span>
          <strong>
            {food.vegetarian ? "🥕 Vegetarian" : "🥩 Non-vegetarian"}
          </strong>
        </span>
        <span>
          <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
        </span>
      </div>
      <div>
        <div>
          <span>{food.pricePerServing / 100} per serving</span>
        </div>

        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />
        <h2>Instruction</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
