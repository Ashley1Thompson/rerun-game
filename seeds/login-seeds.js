const { User } = require('../models');

const userData = [
    {
        username: 'canslercp',
        email: 'canslercp@gmail.com',
        password: 'music123'
    },
    {
        username: 'Ashley1Thompson',
        email: 'ashley1thompson@gmail.com',
        password: 'puppers123'
    },
    {
        username: 'AyushUmrani',
        email: 'ayushumrani@gmail.com',
        password: 'coffee123'
    },
    {
        username: 'Okapikid',
        email: 'okapikid@gmail.com',
        password: 'gamer123'
    }
];

const seedLogin = () => User.bulkCreate(userData);

module.exports = seedLogin; 