const router = require('express').Router();
const catalogController = require('./Controllers/catalogController');
const authController = require('./Controllers/authController');
const userController = require('./Controllers/userController');

router.use('/', authController);

router.get('/user/:userId', userController.getUser);

router.get('/catalog', catalogController.getAll);
router.post('/catalog', catalogController.postCatalogCard);
router.get('/catalog/:cardId', catalogController.getCatalogCard)

module.exports = router