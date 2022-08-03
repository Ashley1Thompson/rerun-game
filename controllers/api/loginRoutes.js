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
            email: req.body.email,
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
router.post('/login', async (req, res) => {
    try{
        const dbUserData = await User.findOne({
            where: {
                username: req.body.username
            }
        });

        if (!dbUserData) {
            res
                .status(400)
                .json({ message: 'Incorrect username or password. Please try again.'});
                return
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect username or password. Please try again!' });
                return
        }
            req.session.save(() => {
                req.session.loggedIn = true;
                console.log(
                    '~ file: loginRoutes.js ~ line 71 ~ req.session.save ~ req.session.cookie',
                    req.session.cookie
                );

                res
                    .status(200)
                    .json({ user: dbUserData, message: 'You are now logged in!'});
            });  
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Logout


module.exports = router;