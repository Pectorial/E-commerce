const express = require('express')

const router = express.Router();

router.put('/signup', authController.getSignup)


router.post('/login', authController.getLogin)


router.patch('/resetPasswd', authController.resetPasswd)




exports.module = router;