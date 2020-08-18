let express = require('express');
let router = express.Router();
let userApi = require('../controllers/userApiController');

router.get('/', userApi.index)
router.get('/create', userApi.create)
router.get('/:id', userApi.show)
router.post('/create', userApi.store)

module.exports = router;
