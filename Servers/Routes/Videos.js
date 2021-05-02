const router = require('express').Router(),
VideosController = require('../controllers/Videos');

router.get('/',VideosController.index)

module.exports = router