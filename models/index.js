const User = require ('./user');
const Stats = require ('./stats');

User.hasOne(Stats, {
  forgeinKey: 'userId',
  onDelete: 'CASCADE',
});

Stats.belongsTo(User, {
  foreignKey: 'userId'
});

module.exports = { User, Stats };