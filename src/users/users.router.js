const router = require("express").Router();
const userController = require("./users.controller");
const userValidator = require("./users.validators");

router.post("/login", userValidator.loginCheck, userController.signIn);
router.post("/signup", userController.signUp);

module.exports = router;
