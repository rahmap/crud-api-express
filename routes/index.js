let express = require('express');
const axios = require('axios')
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/users')
});

router.get('/admin',  function(req, res, next) {
  let test = {
    title : 'Testing',
    data : {
      age : 18,
      address : 'jineman'
    }
  }
  let data = [];
    axios.get('http://www.omdbapi.com/?apikey=6a50518e&s=love')
    .then( response => {
      log(response.data);
      res.render('nasa', { title: 'Api Nasa', test, data : response.data });
    })
    .catch(error => {
      console.log(error)
      res.render('error', { error: 'Error Bro'})
    })


});

module.exports = router;

