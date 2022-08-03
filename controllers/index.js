const router = require('express').Router();
const apiRoutes = require('./api');
const loginRoutes = require('./api/loginRoutes')

router.use('/', loginRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;