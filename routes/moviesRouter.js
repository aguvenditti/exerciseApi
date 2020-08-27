const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/', moviesController.getAll);

router.post('/create', moviesController.create);

router.get('/:id', moviesController.getOne);



module.exports = router;

