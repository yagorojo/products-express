const router = require("express").Router();
const productController = require("./products.controller");
const { validateToken } = require("../middlewares/validateToken");
const { validateRole } = require("../middlewares/validateRole");
const productValidator = require("./products.validators");

router.get("/", productController.indexProducts);
router.get("/:id", productController.showProduct);
router.post(
  "/",
  productValidator.productCheck,
  validateToken,
  validateRole,
  productController.createProduct
);
router.put(
  "/:id",
  productValidator.productCheck,
  validateToken,
  validateRole,
  productController.updateProduct
);
router.delete(
  "/:id",
  validateToken,
  validateRole,
  productController.deleteProduct
);

module.exports = router;
