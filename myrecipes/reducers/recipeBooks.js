import {
    CREATE_RECIPE_BOOK,
    RETRIEVE_RECIPE_BOOK,
    UPDATE_RECIPE_BOOK,
    DELETE_RECIPE_BOOK
} from "../actions/actionType";

const initialState = [];

function recipeBookReducer(recipeBooks = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_RECIPE_BOOK:
            return [...recipeBooks, payload];

        case RETRIEVE_RECIPE_BOOK:
            return payload;

        case UPDATE_RECIPE_BOOK:
            return recipeBooks.map((recipeBook) => {
                if (recipeBook.name === payload.name) {
                    return {
                        ...recipeBook,
                        ...payload,
                    };
                } else {
                    return recipeBook;
                }
            });

        case DELETE_RECIPE_BOOK:
            return recipeBooks.filter(({ name }) => name !== payload.name);

        default:
            return recipeBooks;
    }
};

export default recipeBookReducer;
