const userData = require('./userData');
const { User } = require('../models');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    return: true,
  });
  console.log('\n----- LOGIN SEEDED -----\n');

  process.exit(0);
};

seedAll();