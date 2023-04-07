const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const auth = require('../middleware/auth');


router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.put('/profile', auth, UserController.updateProfile);
router.put('/password', auth, UserController.updatePassword);
router.put('/interests', auth, UserController.updateInterests);
router.get('/followers', auth, UserController.getFollowers);

module.exports = router;
