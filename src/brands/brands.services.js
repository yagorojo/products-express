const prisma = require("../../prisma/prisma");

exports.getAllBrands = async () => {
  return await prisma.Brand.findMany({});
};
