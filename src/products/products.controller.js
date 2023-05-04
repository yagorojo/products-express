const productService = require("./products.services");

exports.indexProducts = async (req, res) => {
  const { brand } = req.query;
  let products;

  try {
    if (brand) products = await productService.getAllProductsFiltered(brand);
    else products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.showProduct = async (req, res) => {
  try {
    const product = await productService.getProduct(+req.params.id);
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await productService.updateProduct(
      +req.params.id,
      req.body
    );
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await productService.deleteProduct(+req.params.id);
    res.status(204).json({ message: "Product deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
