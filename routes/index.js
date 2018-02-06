var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
// const app = require('../app');
// console.log(app.app);
const adminRegister = require('./admin/adminRegister'),
    adminLogin = require('./admin/adminLogin');


/* GET home page. */
router.post('/',(req, res, next)=> {
    console.log(req.body.testing);
    res.json({
        success: true,
        data: req.body.testing
    });
});

router.post('/register', adminRegister.adminSignup);

router.post('/login', adminLogin.adminSignin);

router.get('/',(req, res, next)=> {
    console.log("get call");
    res.json({
        success: true,
        message: 'get call'
    });
});

module.exports = router;
