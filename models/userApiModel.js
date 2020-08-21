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
  },

  deleteUser : function (id){
    return knex('users').where('user_id', id).delete()
  },

  updateUser : function (id, data) {
    return knex('users')
    .where('user_id', id)
    .update({
      user_name : data.user_name,
      user_address : data.user_address,
      user_age : data.user_age
    }).then(async (val)  =>  {
      return {
        affectedRows : val,
        postData : await knex('users').where('user_id', id)
      }
    }).catch( async (err) => {
      return {
        affectedRows : err,
        postData : await knex('users').where('user_id', id)
      }
    })
  }
}
