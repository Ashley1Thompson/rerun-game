const router = require('express').Router();
const apiRoutes = require('./api');
const leaderboardRoutes = require('./api/leaderboardRoutes');


router.use('/api', apiRoutes);
router.use('/leaderboard',leaderboardRoutes);


router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;