const router = require("express").Router();
const brandController = require("./brands.controller");

router.get("/", brandController.indexBrands);

module.exports = router;
