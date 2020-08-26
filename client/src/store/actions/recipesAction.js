import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.spoonacular.com";

export const FETCH_RECIPES_START = "FETCH_RECIPES_START";
export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";
export const FETCH_RECIPES_FAILURE = "FETCH_RECIPES_FAILURE";

const listCount = 20;

export const getRecipes = (searchTerm) => async (dispatch) => {
    dispatch({ type: FETCH_RECIPES_START })
    const localStorageKey = `/recipes/complexSearch?query=${searchTerm}&instructionsRequired=true&number=${listCount}&addRecipeNutrition=true&apiKey=${API_KEY}`;

    if (localStorage.getItem(localStorageKey)) {
        console.log('USED LOCAL CACHE');
        dispatch({
            type: FETCH_RECIPES_SUCCESS,
            payload: JSON.parse(localStorage.getItem(localStorageKey))
        });
    } else {
        axios.get(`${BASE_URL}${localStorageKey}`)
            .then(response => {
                console.log('FETCHED FROM API');
                dispatch({
                    type: FETCH_RECIPES_SUCCESS,
                    payload: response.data.results
                });
                localStorage.setItem(localStorageKey, JSON.stringify(response.data.results));

            })
            .catch(error => {
                dispatch({
                    type: FETCH_RECIPES_FAILURE,
                    payload: error
                })
            })
    }

}


export const FETCH_RECIPE_BY_ID_START = "FETCH_RECIPE_BY_ID_START";
export const FETCH_RECIPE_BY_ID_SUCCESS = "FETCH_RECIPE_BY_ID_SUCCESS";
export const FETCH_RECIPE_BY_ID_FAILURE = "FETCH_RECIPE_BY_ID_FAILURE";

export const getRecipeById = (id) => dispatch => {

    dispatch({ type: FETCH_RECIPE_BY_ID_START });

    const localStorageKey = `recipes/${id}`;

    if (localStorage.getItem(localStorageKey)) {
        console.log('USED LOCAL CACHE');
        const responses = JSON.parse(localStorage.getItem(localStorageKey));
        dispatch({
            type: FETCH_RECIPE_BY_ID_SUCCESS,
            payload: responses
        });
    } else {
        
        return axios
        .get(`${BASE_URL}/recipes/${id}/information?includeNutrition=true&apiKey=${API_KEY}`)
            .then(responses => {
                console.log('FETCHED FROM API', responses.data);
                dispatch({
                    type: FETCH_RECIPE_BY_ID_SUCCESS,
                    payload: responses.data
                });
                localStorage.setItem(localStorageKey, JSON.stringify(responses.data))
            })
            .catch(error => {
                dispatch({
                    type: FETCH_RECIPE_BY_ID_FAILURE,
                    payload: error
                })
            })
    }

}
