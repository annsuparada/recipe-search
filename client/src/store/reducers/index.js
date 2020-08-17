import { combineReducers } from 'redux';
import { recipesReducer } from './recipesReducer';
import { recipesByTypeReducer } from './recipesByTypeReducer';
import { advanceSearchReducer } from './advanceSearchReducer';

export const reducer = combineReducers({
    recipesReducer,
    recipesByTypeReducer,
    advanceSearchReducer
})