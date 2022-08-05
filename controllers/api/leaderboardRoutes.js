const router = require('express').Router();
// Placeholder require code for future User model
const {Stats} = require('../../models');
// The `/api/leaderboard` endpoint
router.get("/", async (req, res) => {
  try {
    const statsDatan = await Stats.findAll({
      attributes: {exclude: ['userId', 'id']}
    });
  //serializing data so the template can read it
  const stats = statsDatan.map((stat) => stat.get({plain: true}));
  console.log(stats);
  //passing the serialized data into template
  res.render('leaderboard', {stats});
    //res.status(200).json(statsDatan);
    // res.render("leaderboard");
  }  catch (err) {
    res.status(500).json(err);
  }
 });
module.exports = router;