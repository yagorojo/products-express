const userService = require("./users.services");
const { validationResult } = require("express-validator");

exports.signIn = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(422).json({ errors: result.array() });
  }

  const { username, password } = req.body;
  try {
    const response = await userService.signIn(username, password);
    if (response.status === "success") res.status(200).json(response);
    else res.status(403).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.signUp = async (req, res) => {
  const { username, password } = req.body;

  try {
    const response = await userService.signUp(username, password);
    if (response.status === "success") res.status(201).json(response);
    else res.status(403).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
