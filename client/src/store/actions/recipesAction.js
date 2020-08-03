import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.spoonacular.com";

export const FETCH_RECIPES_START = "FETCH_RECIPES_START";
export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";
export const FETCH_RECIPES_FAILURE = "FETCH_RECIPES_FAILURE";

export const getRecipes = () => dispatch => {
    dispatch({ type: FETCH_RECIPES_START })
    return axios
        .get(`${BASE_URL}/recipes/complexSearch?query=beef&number=20&addRecipeNutrition=true&apiKey=${API_KEY}`)
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


export const FETCH_RECIPE_BY_ID_START = "FETCH_RECIPE_BY_ID_START";
export const FETCH_RECIPE_BY_ID_SUCCESS = "FETCH_RECIPE_BY_ID_SUCCESS";
export const FETCH_RECIPE_BY_ID_FAILURE = "FETCH_RECIPE_BY_ID_FAILURE";

export const getRecipeById = (id) => dispatch => {
    const requestOne = axios.get(`${BASE_URL}/recipes/${id}/information?apiKey=${API_KEY}`);
    const requestTwo = axios.get(`${BASE_URL}/recipes/${id}/analyzedInstructions?apiKey=${API_KEY}`);

    dispatch({ type: FETCH_RECIPE_BY_ID_START })
    return axios
    
    .all([requestOne, requestTwo])
    .then(axios.spread((...responses) => {
        dispatch({
            type: FETCH_RECIPE_BY_ID_SUCCESS,
            payload: {"info": responses[0].data, "insturctions":responses[1].data}
        })
      }))
        .catch(error => {
            dispatch({
                type: FETCH_RECIPE_BY_ID_FAILURE,
                payload: error
            })
        })
}
