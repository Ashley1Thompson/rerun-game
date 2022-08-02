const seedLogin = require('./login-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedLogin();
  console.log('\n----- LOGIN SEEDED -----\n');

  process.exit(0);
};

seedAll();