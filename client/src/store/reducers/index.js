import { combineReducers } from 'redux';
import { recipesReducer } from './recipesReducer';
import { recipesByTypeReducer } from './recipesByTypeReducer';

export const reducer = combineReducers({
    recipesReducer,
    recipesByTypeReducer,
})