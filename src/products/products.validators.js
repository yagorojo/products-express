const { check } = require('express-validator');

exports.productCheck = [
  check('name')
    .exists().withMessage('Name must exist.')
    .trim()
    .isLength({ max: 30 }).withMessage('Name too long.'),

  check('image_url')
    .exists().withMessage('image_url must exist.'),

  check('price')
    .exists().withMessage('Price must exists.')
    .isInt().withMessage('Must be an integer.'),

  check('brandId')
    .exists().withMessage('Brand must exist.')
    .isInt().withMessage('Must be an integer.'),
]