const knexconfig = require("./knexfile")[process.env.NODE_ENV];
const knex = require("knex")(knexconfig);

module.exports = knex;
