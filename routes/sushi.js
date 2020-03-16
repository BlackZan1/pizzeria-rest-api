const express = require('express');
const router = express.Router();
const SushiController = require('../controllers/sushi');
const upload = require('../utils/saveImage');

// Sensei want to post new Sushi to DB
router.post('/', upload.single('image'), SushiController.post_sushi);

// Sensei want to update receipt or something else from our sushi
router.put('/update/:id', upload.single('image'), SushiController.udpate_sushi_by_id);

// Sensei want to delete sushi, forever!
router.delete('/:id', SushiController.delete_sushi_by_id);

module.exports = router;