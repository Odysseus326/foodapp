import { useEffect, useState } from "react";  // Can import multiple things from the same location in one line

export default function FoodDetails({foodId}) {
    const [food, setFood] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = '077ca198a30b48439de34106d2c2c729';

    useEffect(()=> {
        async function fetchFood() {
            const res =  await fetch(`${URL}?apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data);
            setFood(data);
            setIsLoading(false);
        }
        fetchFood();
    }, [foodId])
        return (
            <div>
                <div>
                    <h1>{food.title}</h1>
                </div>
                <img src={food.image} alt=""/>
                <span>
                    <strong>⏲️ {food.readyInMinutes} minutes</strong>
                </span>
                <span>
                    <strong>👨‍👧 Serves {food.servings}</strong>
                </span>
                <span>
                    {food.vegetarian ? "🥕 Vegetarian": "🥩 Non-vegetarian"}
                </span>
                <span>
                    {food.vegan ? "🐮 Vegan": ""}
                </span>
                <div>
                    <span>
                        ${pricePerServing/100} per serving
                    </span>
                </div>

                <div>
                    <h2>Instruction</h2>
                    {isLoading? <p>Loading...</p> : food.analyzedInstructions[0].steps.map((step)=>(<li>{step.step}</li>))}
                </div>
            </div>
        );
}