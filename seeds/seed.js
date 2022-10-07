const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const coinData = require('./coinData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  for (const project of coinData) {
    await Project.create({
      ...project,
      //user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
