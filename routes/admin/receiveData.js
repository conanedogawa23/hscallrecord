const mysql = require('mysql');

const retrieveData = (req, res, next)=> {
    let connectFetchData = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "mycalldb"
    });
    
    connectFetchData.connect((err)=> {
        if(err) return err;
        console.log('connected');
        console.log(req.body.request);
        let sql = "SELECT * FROM datarec WHERE location = ?";
        //     imei, executiveno, audio, location, time, customerno
        // ]];
        connectFetchData.query(sql, [req.body.request], (err, result)=> {
            if (err) return err;
            console.log(result);
            res.status(200).send({
                message: 'successful',
                success: true,
                data: result
            });
        });
    });
};

module.exports = {
    retrieveData
};