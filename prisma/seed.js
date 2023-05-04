const prisma = require("./prisma");
const bcrypt = require("bcrypt");

const brands = [
  {
    name: "Nike",
    logo_url: "",
  },
  {
    name: "Topper",
    logo_url: "",
  },
  {
    name: "Adidas",
    logo_url: "",
  },
  {
    name: "New Balance",
    logo_url: "",
  },
];

const products = [
  {
    name: "Nike 1",
    description: "Description for Nike Shoes.",
    image_url: "",
    price: 200,
    brandId: 1,
  },
  {
    name: "Topper 1",
    description: "Description for Topper Shoes.",
    image_url: "",
    price: 100,
    brandId: 2,
  },
  {
    name: "Adidas 1",
    description: "Description for Adidas Shoes.",
    image_url: "",
    price: 150,
    brandId: 3,
  },
  {
    name: "New Balance 1",
    description: "Description for New Balance Shoes.",
    image_url: "",
    price: 125,
    brandId: 4,
  },
];

async function main() {
  for (const brandSeed of brands) {
    await prisma.Brand.create({
      data: brandSeed,
    });
  }

  for (const productSeed of products) {
    await prisma.Product.create({
      data: productSeed,
    });
  }

  await prisma.Role.create({
    data: { name: "USER" },
  });

  await prisma.Role.create({
    data: { name: "ADMIN" },
  });

  await prisma.User.create({
    data: {
      username: "admin",
      password: bcrypt.hashSync("admin", 10),
      roleId: 2,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
