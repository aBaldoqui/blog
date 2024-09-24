import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';

const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: 'blog',
  user: 'user',
  password: 'password',
  host: 'localhost',
  port: 5432,
  ssl: false,
  clientMinMessages: 'notice',
});

export default sequelize