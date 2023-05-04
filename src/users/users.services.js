const prisma = require("../../prisma/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signIn = async (username, password) => {
  const user = await prisma.User.findUnique({
    where: { username },
  });
  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) return { status: "error", message: "Password mismatch" };
  const token = jwt.sign(
    {
      user: {
        id: user.id,
        role: user.roleId,
        username: user.username,
      },
    },
    process.env.API_SECRET,
    { expiresIn: 86400 }
  );
  return { status: "success", token, message: "Login successfull" };
};

exports.signUp = async (username, password) => {
  let user = await prisma.User.findUnique({
    where: { username },
  });
  if (user) return { status: "error", message: "User already exists" };
  user = await prisma.User.create({
    data: {
      username,
      password: bcrypt.hashSync(password, 10),
    },
  });
  const token = jwt.sign(
    {
      user: {
        id: user.id,
        role: user.roleId,
        username: user.username,
      },
    },
    process.env.API_SECRET,
    { expiresIn: 86400 }
  );
  return { status: "success", token, message: "Account created successfully" };
};
