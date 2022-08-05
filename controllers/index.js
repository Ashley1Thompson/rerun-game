const router = require('express').Router();
const apiRoutes = require('./api');
const loginRoutes = require('./api/loginRoutes')
const leaderboardRoutes = require('./api/leaderboardRoutes');
const gameRoutes = require("./api/gameRoutes");

router.use('/', loginRoutes);
router.use('/api', apiRoutes);
router.use('/leaderboard',leaderboardRoutes);
router.use("/game", gameRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
