const knex = require('../config/db_knex')

module.exports = {
  getAllUsers : function(){
    return knex('users').then(results => results)
  },

  getSingleUser : function(id){
    return knex('users').where('user_id', id).then(results => results)
  },

  addUser : function(data){
    return knex('users').insert({
      user_name : data.user_name,
      user_address : data.user_address,
      user_age : data.user_age
    }).then(results => results[0]).catch(() => 0)
  }
}
