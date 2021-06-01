const Videos = require("../model/Videos");

module.exports = {
  index: (req, res) => {
    Videos.find({})
      .then((Messages) => {
        res.json(Messages);
      })
      .catch((error) => {
        res.json({ error: error });
      });
  },
  //-------------------------------------------
};
