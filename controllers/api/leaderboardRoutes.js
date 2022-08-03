const router = require('express').Router();
// Placeholder require code for future User model
const {Stats, User} = require('../../models');

// The `/api/leaderboard` endpoint

// get all stats
router.get('/', async (req, res) => {
    //find all stats
    try {
        const statsData = await Stats.findAll({
            include: [{model: User}]
        });
        res.status(200).json(statsData);
    }   catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;