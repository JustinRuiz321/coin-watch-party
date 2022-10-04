const sequelize = require('../config/connection');
const { User, Coins } = require('../modules');


const cryptoData = require('./cryptoData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const info = await User.bulkCreate(cryptoData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Coins.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
