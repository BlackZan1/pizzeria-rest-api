const express = require('express');
const router = express.Router();
const SnackController = require('../controllers/snack');
const upload = require('../utils/saveImage');

// Post new Snack to MongoDB 
router.post('/', upload.single('image'), SnackController.post_snack);

// Update data of Snack which found bu Id
router.put('/update/:id', upload.single('image'), SnackController.update_snack_by_id);

// Delete Snack forever!
router.delete('/:id', SnackController.delete_snack_by_id);

module.exports = router;