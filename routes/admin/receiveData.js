const mysql = require('mysql');

const retrieveData = (req, res, next)=> {
    console.log(req.files);
    console.log(req.body);
    let connectFetchData = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "mycalldb"
    });
    
    connectFetchData.connect((err)=> {
        if(err) return err;

        let sql = "SELECT * FROM datareceived";
        // let fetchedResults = [[
        //     imei, executiveno, audio, location, time, customerno
        // ]];
        connectFetchData.query(sql, (err, result)=> {

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