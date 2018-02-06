var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken'),
    tokenAuth = require('./admin/createToken');
// const app = require('../app');
// console.log(app.app);
const adminRegister = require('./admin/adminRegister'),
    adminLogin = require('./admin/adminLogin'),
    dataFromApi = require('./admin/fetchData'),
    dataFromDevice = require('./admin/receiveData');


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

router.use((req, res, next)=> {
	const token = req.query.token;
	console.log(token);
	if(token) {
		jwt.verify(token, tokenAuth.secretKey, function(err, decoded){
			if(err) {
				res.status(403).send({ success: false, message: "failed to authenticate"});
			} else {
				req.decoded = decoded;
				next();
			}
		});
	} else {
		res.status(403).send({ success: false, message: "no token generated"});
	}
});

router.get('/',(req, res, next)=> {
    console.log("get call");
    res.json({
        success: true,
        message: 'get call'
    });
});

router.post('/fetchData', dataFromApi.getData);

router.post('/receiveData', dataFromDevice.retrieveData);

module.exports = router;
