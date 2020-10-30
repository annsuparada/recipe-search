import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.spoonacular.com";

export const FETCH_ADVANCE_SEARCH_START = "FETCH_ADVANCE_SEARCH_START";
export const FETCH_ADVANCE_SEARCH_SUCCESS = "FETCH_ADVANCE_SEARCH_SUCCESS";
export const FETCH_ADVANCE_SEARCH_FAILURE = "FETCH_ADVANCE_SEARCH_FAILURE";
export const TOGGLE_ADVANCE_SEARCH = "TOGGLE_ADVANCE_SEARCH";
const listCount = 20;

export const toggleAdvanceSearch = (boolean) => (dispatch) => {
  dispatch({ type: TOGGLE_ADVANCE_SEARCH, payload: boolean });
};

export const getAdvanceRecipes = (
  recipe,
  minCalories,
  maxCalories,
  minCarbs,
  maxCarbs,
  minProtein,
  maxProtein,
  minFat,
  maxFat,
  diet,
  intolerances
) => async (dispatch) => {
  dispatch({ type: FETCH_ADVANCE_SEARCH_START });

  const localStorageKey = `/recipes/complexSearch?query=${recipe}&number=${listCount}&addRecipeNutrition=true
        &minCalories=${minCalories}&maxCalories=${maxCalories}&minCarbs=${minCarbs}&maxCarbs=${maxCarbs}&minProtein=${minProtein}
        &maxProtein=${maxProtein}&minFat=${minFat}&maxFat=${maxFat}&diet=${diet}&intolerances=${intolerances}&instructionsRequired=true&sort=popularity&apiKey=${API_KEY}`;

  if (localStorage.getItem(localStorageKey)) {
    console.log("USED LOCAL CACHE");
    dispatch({
      type: FETCH_ADVANCE_SEARCH_SUCCESS,
      payload: JSON.parse(localStorage.getItem(localStorageKey)),
    });
  } else {
    axios
      .get(`${BASE_URL}${localStorageKey}`)
      .then((response) => {
        console.log("FETCHED FROM API");
        dispatch({
          type: FETCH_ADVANCE_SEARCH_SUCCESS,
          payload: response.data.results,
        });
        localStorage.setItem(
          localStorageKey,
          JSON.stringify(response.data.results)
        );
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ADVANCE_SEARCH_FAILURE,
          payload: error,
        });
      });
  }
};
