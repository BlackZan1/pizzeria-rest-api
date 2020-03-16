const express = require('express');
const router = express.Router();
const MenuController = require('../controllers/menu');

router.get('/', MenuController.get_all_products);

module.exports = router;