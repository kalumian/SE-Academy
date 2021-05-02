const router = require('express').Router(),
SectionController = require('../controllers/Sections');

router.get('/',SectionController.index)
router.post('/add/:field',SectionController.create)
router.get('/SectionTitle/:SectionTitle',SectionController.ShowBySectionTitle)
router.get('/field/:field',SectionController.ShowByField)
router.delete('/delete/:SectionTitle',SectionController.delete)

module.exports = router