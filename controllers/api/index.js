const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const leaderboardRoutes = require('./leaderboardRoutes');

router.use('/login', loginRoutes);
router.use('/leaderboard', leaderboardRoutes);

module.exports = router;