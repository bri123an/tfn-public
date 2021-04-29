import api from './api'

class RecipeBookDataService {

    getAll() {
        return api.get("/recipe_books")

    }

    get(name) {
        return api.get(`/recipe_books/${name}`)
    }

    create(data) {
        return api.post("/recipe_books", data);
    }

    update(name, data) {
        return api.put(`/recipe_books/${name}`, data);
    }

    delete(name) {
        return api.delete(`/recipe_books/${name}`);
    }
}


export default new RecipeBookDataService();
