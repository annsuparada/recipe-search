import {
    FETCH_RECIPES_START,
    FETCH_RECIPES_SUCCESS,
    FETCH_RECIPES_FAILURE,
    FETCH_RECIPE_BY_ID_START,
    FETCH_RECIPE_BY_ID_SUCCESS,
    FETCH_RECIPE_BY_ID_FAILURE,
    FETCH_ADVANCE_SEARCH_START,
    FETCH_ADVANCE_SEARCH_SUCCESS,
    FETCH_ADVANCE_SEARCH_FAILURE,
} from '../actions/index';

export const initialState = {
    recipes: [],
    advanceSearchRecipes: [],
    isLoading: false,
    error: '',
    recipe: [],
    nextRecipes: [],
    searchTerm: "",
}

export const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RECIPES_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_RECIPES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                recipes: action.payload.filter(item => item.analyzedInstructions.length > 0),
                advanceSearchRecipes: []
            }
        case FETCH_RECIPES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: 'API is down. Please try again.'
            }

        case FETCH_RECIPE_BY_ID_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_RECIPE_BY_ID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                recipe: action.payload
            }
        case FETCH_RECIPE_BY_ID_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: 'API is down. Please try again.'
            }
        case FETCH_ADVANCE_SEARCH_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_ADVANCE_SEARCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                advanceSearchRecipes: action.payload,
            }
        case FETCH_ADVANCE_SEARCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: 'API is down. Please try again.'
            }
        default:
            return state
    }
}