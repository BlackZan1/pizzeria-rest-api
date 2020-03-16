const express = require('express');
const router = express.Router();
const PizzaController = require('../controllers/pizza');
const upload = require('../utils/saveImage');

// Post new Pizza to MongoDB
router.post('/', upload.single('image'), PizzaController.post_pizza);

// Update data of Pizza which found bu Id
router.put('/update/:id', upload.single('image'), PizzaController.update_pizza_by_id);

// Delete Pizza forever!
router.delete('/:id', PizzaController.delete_pizza_by_id);

module.exports = router;
