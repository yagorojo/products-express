const jwt = require("jsonwebtoken");

exports.validateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Missing Token" });
  try {
    const decoded = jwt.verify(token, process.env.API_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid Token" });
  }
};
