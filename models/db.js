const Sequelize = require ("sequelize");

//conxão com o banco de dados mysql

const sequelize = new Sequelize ("node", "root", "tvsz146994", {
  host : "localhost",
  dialect : "mysql"
});


module.exports = {
  Sequelize : Sequelize,
  sequelize : sequelize
}