const mysql = require('mysql');

const retrieveData = (req, res, next)=> {
    console.log(req.files);
    console.log(req.body);
    let connectFetchData = mysql.createConnection({
        host: "localhost",
        user: "phpmyadmin",
        password: "mysql",
        database: "mycalldb"
    });
    
    connectFetchData.connect((err)=> {
        if(err) return err;
        console.log('connected');
        let sql = "SELECT * FROM datarec WHERE location = ?";
        //     imei, executiveno, audio, location, time, customerno
        // ]];
        connectFetchData.query(sql, [req.body.location], (err, result)=> {

            console.log(result);
            res.status(200).send({
                message: 'successful',
                success: true,
                data: result
            });
        });
    });
    console.log('in retrieve of data from devices');
};

module.exports = {
    retrieveData
};