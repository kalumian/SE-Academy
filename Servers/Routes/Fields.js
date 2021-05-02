const router = require('express').Router(),
FieldsController = require('../controllers/Fields');

router.get('/',FieldsController.index)
router.post('/add',FieldsController.create)
router.get('/:title',FieldsController.show)
router.put('/:title',FieldsController.update)
router.delete('/:title',FieldsController.delete)

module.exports = router