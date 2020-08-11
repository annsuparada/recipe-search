import {
    FETCH_TYPE_OF_RECIPE_START,
    FETCH_TYPE_OF_RECIPE_SUCCESS,
    FETCH_TYPE_OF_RECIPE_FAILURE,
} from '../actions/index';

export const initialState = {
    recipesByType: [],
    isLoading: false,
    error: '',
}

export const recipesByTypeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TYPE_OF_RECIPE_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_TYPE_OF_RECIPE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                recipesByType: action.payload.filter(item => item.analyzedInstructions.length > 0),
            }
        case FETCH_TYPE_OF_RECIPE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: 'API is down. Please try again.'
            }

        default:
            return state
    }
}