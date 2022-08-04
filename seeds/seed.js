const userData = require('./userData');
const statsData = require('./statsData');
const { User } = require('../models');
const {Stats}  = require('../models');




const sequelize = require('../config/connection');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    return: true,
  });


  console.log('\n----- LOGIN SEEDED -----\n');

  const stats = await Stats.bulkCreate(statsData, {
    individualHooks: true,
    return: true,
  });

 // await seedStatistics();

  console.log('\n----- STATS SEEDED -----\n');

  process.exit(0);
};

seedDatabase();