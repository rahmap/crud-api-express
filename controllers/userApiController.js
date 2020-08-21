let userApiModel = require('../models/userApiModel');
let CircularJSON = require('circular-json');
module.exports = {
  index : async function(req, res) {
    let users = await userApiModel.getAllUsers()
    let statusCode, results
    if(req.header('Content-Type') !== 'application/json'){
      res.write('html gan')
      res.end()
    } else {
      if(users.length > 0) {
        statusCode = 200
        results = {
          statusCode: 200,
          statusText: 'success',
          message: 'get all users',
          results: users
        }
      } else {
        statusCode = 404
        results = {
          statusCode : 404,
          statusText : 'error',
          message : 'can not get all users',
          results : null
        }
      }
      res.status(statusCode).json(results)
      res.end()
    }
  },

  show : async function(req, res) {
    let singleUser = await userApiModel.getSingleUser(req.params.id)
    let statusCode, results

    if(req.header('Content-Type') !== 'application/json'){
      res.write('detail')
      res.end()
    } else {
      if(singleUser.length) {
        statusCode = 200
        results = {
          statusCode : 200,
          statusText : 'success',
          message : 'get single user',
          results : singleUser
        }
      } else {
        statusCode = 404
        results = {
          statusCode : 404,
          statusText : 'error',
          message : 'user not found',
          results : null
        }
      }
      res.status(statusCode).json(results)
      res.end()
    }
  },

  create: function(req, res){
    res.write('wkwkw')
    res.end()
  },

  store : async function (req, res) {
    if(req.header('Content-Type') !== 'application/x-www-form-urlencoded'){
      res.status(403).json({
        statusCode : 403,
        statusText : 'error',
        message : 'create user',
        results : {
          id : 0,
          description : 'Content-Type should application/x-www-form-urlencoded',
          postData : req.body
        }
      })
    } else {
      let insert = await userApiModel.addUser(req.body)
      if(insert){
        res.status(200).json({
          statusCode : 200,
          statusText : 'success',
          message : 'create user',
          results : {
            id : insert,
            description : 'create user success',
            postData : req.body
          }
        })
      } else {
        res.status(500).json({
          statusCode : 500,
          statusText : 'error',
          message : 'create user',
          results : {
            id : insert,
            description : 'create user failed',
            postData : req.body
          }
        })
      }
    }
    res.end()
  },

  destroy : async function (req, res){
    let deleteUser = await userApiModel.deleteUser(req.params.id)
    if(deleteUser) {
      res.status(200).json({
        statusCode : 200,
        statusText : 'success',
        message : 'delete user success',
        results : deleteUser
      })
    } else {
      res.status(500).json({
        statusCode : 500,
        statusText : 'error',
        message : 'delete user failed',
        results : deleteUser
      })
    }
    res.end()
  },

  edit : function (req, res) {
    res.write('delete')
    res.end()
  },

  update : async function (req, res) {
    let editUser = await userApiModel.updateUser(req.params.id, req.body)
    if(editUser.affectedRows) {
      res.status(200).json({
        statusCode : 200,
        statusText : 'success',
        message : 'update user success',
        results : editUser
      })
    } else {
      res.status(500).json({
        statusCode : 500,
        statusText : 'error',
        message : 'update user failed',
        results : {
          affectedRows : editUser.affectedRows,
          postData : req.body
        }
      })
    }
    res.end()
  }
}