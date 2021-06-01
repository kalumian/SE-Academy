const Sections = require("../model/Sections");

module.exports = {
  index: (req, res) => {
    Sections.find({})
      .then((Messages) => {
        res.json(Messages);
      })
      .catch((error) => {
        res.json({ error: error });
      });
  },
  create: (req, res) => {
    let sections = new Sections({
      field: req.params.field,
      title: req.body.title,
      description: req.body.description,
      icon: req.body.icon,
      colorThem: req.body.colorThem,
      SectionTitle: req.body.SectionTitle,
    });
    console.log(sections);
    sections.save((error) => {
      if (error) res.json({ error: error });
      else res.json({ message: "تم اضافة القسم بنجاح .." });
    });
  },
  ShowBySectionTitle: (req, res) => {
    Sections.find({ SectionTitle: req.params.SectionTitle })
      .then((Messages) => {
        res.json(Messages);
      })
      .catch((error) => {
        res.json({ error: error });
      });
  },
  ShowByField: (req, res) => {
    Sections.find({ field: req.params.field })
      .then((Messages) => {
        res.json(Messages);
      })
      .catch((error) => {
        res.json({ error: error });
      });
  },
  delete: (req, res) => {
    console.log("work");
    Sections.deleteOne({ SectionTitle: req.params.SectionTitle })
      .then((Messages) => {
        res.json("تم حذف المجال بنجاح ...");
      })
      .catch((error) => {
        res.json({ error: error });
      });
  },

  //-------------------------------------------
};
