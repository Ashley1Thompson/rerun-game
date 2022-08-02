const router = require('express').Router();
// Placeholder require code for future User model
const {User} = require('../../models');

// The `/api/login` endpoint

// get all user login info (not sure if we will need this)
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            //space for included models if needed
        });
        res.status(200).json(userData)
    }   catch (err) {
        res.status(500).json(err);
    }
});

// CREATE new user
router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            password: req.body.password
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbUserData);
        });
    }   catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login

// Logout

module.exports = router;