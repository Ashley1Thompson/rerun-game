<<<<<<< HEAD
const router = require('express').Router();
const apiRoutes = require('./api');
const loginRoutes = require('./api/loginRoutes')

router.use('/', loginRoutes);
router.use('/api', apiRoutes);
=======
const router = require("express").Router();
const apiRoutes = require("./api");
const gameRoutes = require("./api/gameRoutes");

router.use("/api", apiRoutes);
router.use("/game", gameRoutes);
>>>>>>> 4dba43872a6f0a5d3c2f3a86f45b57ec615ef748

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
