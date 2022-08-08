const router = require("express").Router();
const loginRoutes = require("./loginRoutes");
const leaderboardRoutes = require("./leaderboardRoutes");
const gameRoutes = require("./gameRoutes");

router.use("/login", loginRoutes);
router.use("/leaderboard", leaderboardRoutes);
router.use("/game", gameRoutes);

module.exports = router;
