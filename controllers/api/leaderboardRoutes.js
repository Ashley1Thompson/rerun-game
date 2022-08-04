const router = require('express').Router();
// Placeholder require code for future User model
const {Stats, User} = require('../../models');

// The `/api/leaderboard` endpoint


router.get("/", async (req, res) => {
    res.render("leaderboard");
  });
  

// get all stats
router.get('/data', async (req, res) => {
    //find all stats
    try {
        const statsDatan = await Stats.findAll({
            include: [{model: User}]
        });

        //sequelize object into a normal object
       // const serializedStats = statsData.get({plain: true});
       // console.log(serializedStats);

       // res.render("leaderboard", serializedStats);

        res.status(200).json(statsDatan);
        console.log(statsDatan);
    }   catch (err) {
        res.status(500).json(err);
    }
});


  
  

  

  

module.exports = router;

