const Courses = require("../model/Courses");

module.exports = {
  index: (req, res) => {
    Courses.find({})
      .then((Messages) => {
        res.json(Messages);
      })
      .catch((error) => {
        res.json({ error: error });
      });
  },
  create: (req, res) => {
    let course = new Courses({
      course: req.body.course,
      title: req.body.title,
      colorThem: req.body.colorThem,
      Date: req.body.Date,
      number_oF_Video: req.body.number_oF_Video,
      title_section: req.body.title_section,
      Channle: req.body.Channle,
      logo_Channle: req.body.logo_Channle,
      image_video: req.body.image_video,
    });
    course.save((error) => {
      if (error) res.json({ error: error });
      else res.json({ message: "تم اضافة القسم بنجاح .." });
    });
  },
  ShowByCourses: (req, res) => {
    Courses.find({ course: req.params.course })
      .then((Messages) => {
        res.json(Messages);
      })
      .catch((error) => {
        res.json({ error: error });
      });
  },
  ShowByTitle_section: (req, res) => {
    Courses.find({ title_section: req.params.title_section })
      .then((Messages) => {
        res.json(Messages);
      })
      .catch((error) => {
        res.json({ error: error });
      });
  },
  delete: (req, res) => {
    console.log("work");
    Courses.deleteOne({ course: req.params.course })
      .then((Messages) => {
        res.json("تم حذف الدورة بنجاح ...");
      })
      .catch((error) => {
        res.json({ error: error });
      });
  },
  //-------------------------------------------
};
