const router = require('express').Router();
const catalogController = require('./Controllers/catalogController');
const authController = require('./Controllers/authController');
const userController = require('./Controllers/userController');
const stripeController = require('./Controllers/stripeController');

router.use('/', authController);

router.get('/user/:userId', userController.getUser);
router.post('/user/updateUser', userController.postUpdateUser);

router.get('/catalog', catalogController.getAll);
router.post('/catalog', catalogController.postCatalogCard);
router.get('/catalog/:cardId', catalogController.getCatalogCard)

router.post('/create-payment', stripeController.createPaymentSession)
router.post('/orders/:customerId', stripeController.stripeCheckOutGetAway)

module.exports = router