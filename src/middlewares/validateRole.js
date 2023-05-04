const prisma = require("../../prisma/prisma");

exports.validateRole = (req, res, next) => {
  try {
    const adminRole = prisma.Role.findUnique({
      where: { name: "ADMIN" },
    });
    if (adminRole.id === req.user.roleId) next();
    else {
      res.status(403).json({ message: "Forbidden" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error validating user role" });
  }
};
