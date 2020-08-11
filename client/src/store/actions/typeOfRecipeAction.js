import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.spoonacular.com";

export const FETCH_TYPE_OF_RECIPE_START = "FETCH_TYPE_OF_RECIPE_START";
export const FETCH_TYPE_OF_RECIPE_SUCCESS = "FETCH_TYPE_OF_RECIPE_SUCCESS";
export const FETCH_TYPE_OF_RECIPE_FAILURE = "FETCH_TYPE_OF_RECIPE_FAILURE";

const listCount = 20;

export const getRecipesByType = (searchTerm) => async (dispatch) => {
    dispatch({ type: FETCH_TYPE_OF_RECIPE_START })

    const localStorageKey = `/recipes/complexSearch?type=${searchTerm}&number=${listCount}&addRecipeNutrition=true&apiKey=${API_KEY}`;

    if (localStorage.getItem(localStorageKey)) {
        console.log('USED LOCAL CACHE');
        dispatch({
            type: FETCH_TYPE_OF_RECIPE_SUCCESS,
            payload: JSON.parse(localStorage.getItem(localStorageKey))
        });
    } else {
        axios.get(`${BASE_URL}${localStorageKey}`)
            .then(response => {
                console.log('FETCHED FROM API');
                dispatch({
                    type: FETCH_TYPE_OF_RECIPE_SUCCESS,
                    payload: response.data.results
                });
                localStorage.setItem(localStorageKey, JSON.stringify(response.data.results));

            })
            .catch(error => {
                dispatch({
                    type: FETCH_TYPE_OF_RECIPE_FAILURE,
                    payload: error
                })
            })
    }

}
