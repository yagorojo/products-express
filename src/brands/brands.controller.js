const brandService = require("./brands.services");

exports.indexBrands = async (req, res) => {
  try {
    const brands = await brandService.getAllBrands();
    res.status(200).json(brands);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
