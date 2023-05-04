const { check } = require('express-validator');

exports.loginCheck = [
  check('username')
    .exists().withMessage('Username must exist.')
    .trim(),

  check('password')
    .exists().withMessage('Password must exist.')
    .trim()
    .isLength({ min: 5, max: 16 }).withMessage('Largo invalido.'),
]