let express = require('express');
let router = express.Router();
let userApi = require('../controllers/userApiController');

router.get('/', userApi.index)

module.exports = router;
