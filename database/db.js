const knex = require('knex');

const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_HOST_PORT,
} = process.env;

const db = knex({
  client: 'pg',
  connection: {
    host: POSTGRES_HOST,
    user: POSTGRES_USER,
    port: POSTGRES_HOST_PORT,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
  },
});

module.exports = {
  db,
};
