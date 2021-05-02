const router = require('express').Router(),
FieldsRoutes = require('./Fields'),
SectionRoutes = require('./Sections'),
CoursesRoutes = require('./Courses'),
VideosRoutes = require('./Videos');

router.use('/fields', FieldsRoutes)

router.use('/section', SectionRoutes)

router.use('/courses', CoursesRoutes)

router.use('/videos', VideosRoutes)

module.exports = router