const express = require('express');
const router = express.Router();
const seriesController = require('../controllers/seriesController');

router.get('/', seriesController.getAll);

router.post('/create', seriesController.create);

router.get('/:id', seriesController.getOne);



module.exports = router;