import {
    FETCH_ADVANCE_SEARCH_START,
    FETCH_ADVANCE_SEARCH_SUCCESS,
    FETCH_ADVANCE_SEARCH_FAILURE,
} from '../actions/index';

export const initialState = {
    advanceSearchRecipes: [],
    isLoading: false,
    error: '',
}

export const advanceSearchRecipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ADVANCE_SEARCH_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_ADVANCE_SEARCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                advanceSearchRecipes: action.payload.filter(item => item.analyzedInstructions.length > 0),
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