let knex = require('../config/db_knex')

module.exports = {
  testConnection : function (){
    console.log(knex)
  }
}