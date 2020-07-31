import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import axios from 'axios';

const MainSearch = () => {
    const [recipes, setRecipes] = useState([]);

    const API_KEY = process.env.REACT_APP_API_KEY
    const BASE_URL = "https://api.spoonacular.com"
    const getRecipes = () => {
        axios
        .get(`${BASE_URL}/recipes/complexSearch?query=pasta&number=20&addRecipeNutrition=true&apiKey=${API_KEY}`)
        .then(response => {
            setRecipes(response.data.results)
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        getRecipes()
    }, [])

    return (
        <div className="App">
           
            {console.log(recipes)}
            {recipes.map(recipe => (
                <Recipe 
                    key={recipe.id}
                    id={recipe.id}
                    title={recipe.title}
                    nutrients={recipe.nutrition.nutrients}
                    image={recipe.image}
                />
             ))}
        </div>
      );
}
 
export default MainSearch;