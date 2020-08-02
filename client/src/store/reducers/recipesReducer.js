import {
    FETCH_RECIPES_START,
    FETCH_RECIPES_SUCCESS,
    FETCH_RECIPES_FAILURE
} from '../actions/index';

export const initialState = {
    recipes: [],
    isLoading: false,
    error: ''
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
                recipes: action.payload
            }
        case FETCH_RECIPES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: 'API is down. Please try again.'
            }
        default: 
            return state
    }
}