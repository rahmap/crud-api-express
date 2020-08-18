let userApi = require('../models/userApiModel');

module.exports = {
  index : function (req, res) {
    userApi.testConnection()
    res.write('To do')
    res.end()
  }
}