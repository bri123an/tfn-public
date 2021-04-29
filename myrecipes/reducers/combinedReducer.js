import { combineReducers } from "redux";
import recipeBooks from "./recipeBooks";
import recipes from './recipes';

export default combineReducers({
    recipeBooks,
    recipes
});