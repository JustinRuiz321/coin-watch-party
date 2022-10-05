const User = require('./User');
const Coins = require('./coins');

User.hasMany(Coins, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Coins.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Coins };