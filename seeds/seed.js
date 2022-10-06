const sequelize = require('../config/connection');
const { User, Coins } = require('../models');


const cryptoData = require('./cryptoData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const coins = await Coins.bulkCreate(cryptoData, {
    individualHooks: true,
    returning: true,
  });

  const users = await User.bulkCreate(userData.json, {
    individualHooks: true,
    returning: true,
  })
  process.exit(0);

};


seedDatabase();