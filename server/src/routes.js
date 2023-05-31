const router = require('express').Router();
const catalogController = require('./Controllers/catalogController');
const authController = require('./Controllers/authController');
const userController = require('./Controllers/userController');
const stripeController = require('./Controllers/stripeController');

router.use('/', authController);

router.get('/user/:userId', userController.getUser);

router.get('/catalog', catalogController.getAll);
router.post('/catalog', catalogController.postCatalogCard);
router.get('/catalog/:cardId', catalogController.getCatalogCard)

router.post('/create-payment', stripeController.createPaymentSession)

module.exports = router