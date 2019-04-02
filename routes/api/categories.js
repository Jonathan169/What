const router = require("express").Router();
const categoriesController = require("../../controllers/categoryController");

// Matches with "/api/category"
router.route("/")
    .get(categoriesController.findAll)
    .post(categoriesController.create)

// Matches with "/api/category/:id"
router
    .route("/:id")
    .get(categoriesController.findById)
    .put(categoriesController.update)
    .delete(categoriesController.remove);

module.exports = router;

// New subcategory
// POST "/api/subcategory"

// Update subcategory
// PUT "/api/subcategory/:id"

// Delete subcategory
// DELETE "api/subcategory/:id"