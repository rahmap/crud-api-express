let express = require('express');
let router = express.Router();
let user = require('../controllers/userController');

/* GET users listing. */
router.get('/', user.index);

/* Store user. */
router.post('/store', user.store);

/* Create user. */
router.get('/create', user.create);

/* GET user by id. */
router.get('/:id', user.show);

/* Delete user by id. */
router.delete('/:id', user.destroy);

/* Delete user by id. */
router.put('/:id', user.update);


module.exports = router;
