import axios from "axios";

export default {
    // CATEGORIES
    // Gets all categories
    getCategories: function () {
        return axios.get("/api/categories");
    },
    // Gets the category with the given id
    getCategory: function (id) {
        return axios.get("/api/categories/" + id);
    },
    // Deletes the category with the given id
    deleteCategory: function (id) {
        return axios.delete("/api/categories/" + id);
    },
    // Saves a category to the database
    saveCategory: function (catData) {
        return axios.post("/api/categories", catData);
    }
};
