let User = require('../models/userModel');

module.exports = {

  /**
   * Get all users
   * @return all user
   */
  index : function(req, res) {
    User.getAllUser(function (err, rows){
      if(err) throw err
      if(rows.length < 1) res.render('error', {title : 'Something Wrong', subTitle : `User not found, don't waste your time..`})

      res.locals.sessionFlash = req.session.sessionFlash;
      delete req.session.sessionFlash;

      res.render('users/index', {
        title : 'List Users',
        subTitle : 'Display all users from database',
        users : rows,
        messages : res.locals.sessionFlash
      });
    })
  },

  /**
   * Get user by Id
   * @return data user || error => view
   */
  show : function (req, res) {
    User.getUserById(req.params.id,function (err, rows){
      if(err) throw err
      if(rows.length < 1) res.render('error', {title : 'Something Wrong', subTitle : `User not found, don't waste your time..`})

      res.locals.sessionFlash = req.session.sessionFlash;
      delete req.session.sessionFlash;

      res.render('users/index', {
        user : rows[0],
        title : 'Detail User',
        subTitle : 'Display detail user depends his Id',
        messages : res.locals.sessionFlash
      })
    })
  },

  /**
   * Delete user by Id
   * @return void : redirect
   */
  destroy : function (req, res) {
    User.deleteUser(req.params.id, function (err, rows) {
      if(err) throw err
      req.session.sessionFlash = {
        title : 'Success delete user!',
        text : null,
        icon : 'success',
        timer : 2000,
        showConfirmButton : false
      }
      res.redirect('/users');
    })
  },

  /**
   * Create user
   * @return view
   */
  create : function (req, res) {
    res.render('users/create', {
      title: 'Create User',
      subTitle: 'Add user to database'
    })
  },

  /**
   * Create user
   * @return void : redirect
   */
  store : function (req, res) {
    User.createUser(req.body, function (err, result){
      if (err) throw err;
      console.log('Insert count : ' + result.affectedRows)
      req.session.sessionFlash = {
        title : 'Success adding user!',
        text : null,
        icon : 'success',
        timer : 2000,
        showConfirmButton : false
      }
      res.redirect('/users/' + result.insertId);
    })
  },

  /**
   * Updating user
   * @return void : redirect
   */
  update : function (req, res) {
    User.editUser(req.body, req.params.id, function (err, result){
      if (err) throw err;
      console.log('Affected rows : ' + result.affectedRows)
      req.session.sessionFlash = {
        title : 'Success updating user!',
        text : null,
        icon : 'success',
        timer : 2000,
        showConfirmButton : false
      }
      res.redirect('/users/' + req.params.id);
    })
  }

}
