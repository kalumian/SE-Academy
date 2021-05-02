const router = require('express').Router(),
CoursesController = require('../controllers/Courses');

router.get('/',CoursesController.index)
router.delete('/:course',CoursesController.delete)
router.post('/add',CoursesController.create)
router.get('/title_section/:title_section',CoursesController.ShowByTitle_section)
router.get('/course/:course',CoursesController.ShowByCourses)

module.exports = router