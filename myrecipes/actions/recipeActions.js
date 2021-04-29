import {
    CREATE_RECIPE,
    RETRIEVE_RECIPE,
    UPDATE_RECIPE,
    DELETE_RECIPE
} from "./actionType";

import RecipeDataService from "../API_Services/CRUD_Recipe_Services";

export const createRecipe = (name, ingredients, directions) => async (dispatch) => {
    console.log(ingredients);
    try {
        console.log("inside try");
        const res = await RecipeDataService.create({ name, ingredients, directions });
        console.log(res);
        dispatch({
            type: CREATE_RECIPE,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveRecipe = () => async (dispatch) => {
    try {
        const res = await RecipeDataService.getAll();
        dispatch({
            type: RETRIEVE_RECIPE,
            payload: res.data,
        });

    } catch (err) {
        console.log(err);
    }
};

export const updateRecipe = (name, data) => async (dispatch) => {
    try {
        const res = await RecipeDataService.update(name, data);

        dispatch({
            type: UPDATE_RECIPE,
            payload: data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deleteRecipe = (name) => async (dispatch) => {
    try {
        await RecipeDataService.delete(name);

        dispatch({
            type: DELETE_RECIPE,
            payload: { name },
        });
    } catch (err) {
        console.log(err);
    }
};
