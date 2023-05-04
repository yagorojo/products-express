const prisma = require("../../prisma/prisma");

exports.getAllProducts = async () => {
  return await prisma.Product.findMany({
    include: { brand: { select: { name: true } } },
  });
};

exports.getAllProductsFiltered = async (brand) => {
  return await prisma.Product.findMany({
    where: { brand: { name: brand } },
    include: { brand: { select: { name: true } } },
  });
};

exports.getProduct = async (id) => {
  return await prisma.Product.findUnique({
    where: { id },
    include: { brand: true },
  });
};

exports.createProduct = async (productData) => {
  try {
    return await prisma.Product.create({ data: productData });
  } catch (error) {
    throw new Error(`Could not create product: ${error.message}`);
  }
};

exports.updateProduct = async (id, productData) => {
  try {
    return await prisma.Product.update({
      where: { id },
      data: productData,
    });
  } catch (error) {
    throw new Error(`Could not update product: ${error.message}`);
  }
};

exports.deleteProduct = async (id) => {
  try {
    return await prisma.Product.delete({ where: { id } });
  } catch (error) {
    throw new Error(`Could not remove product: ${error.message}`);
  }
};
