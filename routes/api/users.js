const router = require("express").Router();
const usersController = require("../../controllers/usersController");


router.route("/login")
    .get(usersController.login);

router
    .route("/signup")
    .post(usersController.signup);


module.exports = router;