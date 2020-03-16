const express = require('express');
const router = express.Router();
const DrinkController = require('../controllers/drink');
const upload = require('../utils/saveImage');

// Post drink to DB everyone needs to drink ROM!
router.post('/', upload.single('image'), DrinkController.post_drink);

// Update drink state which found by ID, so how many drinks we have - it's good!
router.put('/update/:id', upload.single('image'), DrinkController.update_drink_by_id);

// Delete drink from DB, errors aren't fatal
router.delete('/:id', DrinkController.delete_drink_by_id);

module.exports = router;