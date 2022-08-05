const router = require("express").Router();
const {Stats} = require("../../models");

//Render game handlebar
router.get("/", async (req, res) => {
  res.render("game");
});

//Send score to stats table
router.post('/', withAuth, async (req, res) => {
  try{
    const newStat = await Stats.create({
      ...req.body,
      username: req.session.username,
    });

    res.status(200).json(newStat);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
