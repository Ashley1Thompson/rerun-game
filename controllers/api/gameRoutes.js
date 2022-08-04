const router = require("express").Router();

//Render game handlebar
router.get("/", async (req, res) => {
  res.render("game");
});

module.exports = router;
