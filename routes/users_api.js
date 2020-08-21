let express = require('express');
let router = express.Router();
let userApi = require('../controllers/userApiController');

router.get('/', userApi.index)
router.get('/create', userApi.create)
router.post('/create', userApi.store)
router.get('/edit', userApi.edit)
router.put('/:id', userApi.update)
router.get('/:id', userApi.show)
router.delete('/:id', userApi.destroy)

module.exports = router;
