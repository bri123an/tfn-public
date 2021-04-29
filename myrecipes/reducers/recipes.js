import {
    CREATE_RECIPE,
    RETRIEVE_RECIPE,
    UPDATE_RECIPE,
    DELETE_RECIPE
} from "../../../actions/types"

const initialState = [];

function recipeReducer(recipes = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_RECIPE:
            return [...recipes, payload];

        case RETRIEVE_RECIPE:
            return payload;

        case UPDATE_RECIPE:
            return recipes.map((recipe) => {
                if (recipe.name === payload.name) {
                    return {
                        ...recipe,
                        ...payload,
                    };
                } else {
                    return recipe;
                }
            });

        case DELETE_RECIPE:
            return recipes.filter(({ name }) => name !== payload.name);

        default:
            return recipes;
    }
};

export default recipeReducer;
