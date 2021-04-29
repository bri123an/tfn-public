import {
    CREATE_RECIPE_BOOK,
    RETRIEVE_RECIPE_BOOK,
    UPDATE_RECIPE_BOOK,
    DELETE_RECIPE_BOOK
} from "./actionType";

import RecipeBookDataService from "../API_Services/CRUD_Recipe_Book_Services";

export const createRecipeBook = (name, recipes) => async (dispatch) => {
    try {
        const res = await RecipeBookDataService.create({ name, recipes });

        dispatch({
            type: CREATE_RECIPE_BOOK,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveRecipeBook = () => async (dispatch) => {
    try {
        const res = await RecipeBookDataService.getAll();

        dispatch({
            type: RETRIEVE_RECIPE_BOOK,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateRecipeBook = (name, data) => async (dispatch) => {
    try {
        const res = await RecipeBookDataService.update(name, data);

        dispatch({
            type: UPDATE_RECIPE_BOOK,
            payload: data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deleteRecipeBook = (id) => async (dispatch) => {
    try {
        await RecipeBookDataService.delete(id);

        dispatch({
            type: DELETE_RECIPE_BOOK,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};
