var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/',(req, res, next)=> {
    console.log(req.body.testing);
    res.json({
        success: true,
        data: req.body.testing
    });
});
module.exports = router;
