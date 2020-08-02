import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.spoonacular.com";

export const FETCH_RECIPES_START = "FETCH_RECIPES_START";
export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";
export const FETCH_RECIPES_FAILURE = "FETCH_RECIPES_FAILURE";

export const getRecipes = () => dispatch => {
    dispatch({ type: FETCH_RECIPES_START })
    return axios
        .get(`${BASE_URL}/recipes/complexSearch?query=pasta&number=20&addRecipeNutrition=true&apiKey=${API_KEY}`)
        .then(response => {
            dispatch({
                type: FETCH_RECIPES_SUCCESS,
                payload: response.data.results
            })
        })
        .catch(error => {
            dispatch({
                type: FETCH_RECIPES_FAILURE,
                payload: error
            })
        })
}

