//This file creates the connection to your SQLite file.
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Your local DB file
  logging: false
});

export default sequelize;