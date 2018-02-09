const mysql = require('mysql'),
    fs = require("fs");
    

const getData = (req, res, next)=> {

    const connectFetchData = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "mycalldb"
    });
    
    connectFetchData.connect((err)=> {
        if(err) {
            console.log('error in connection');
            console.log(err);
        } else {
            console.log(`connected`);
            console.log('in get of data from api');
            console.log(req.files.files);
            console.log(req.body);
            let imei = req.body.imei,
                executiveno = req.body.exec,
                audio = req.files.files,
                location = req.body.location,
                time = req.body.time,
                customerno = req.body.cust,
                date = Date.now();
                console.log(audio);
            //getData table creation
            // let sql = "CREATE TABLE datareceived (imei VARCHAR(10), date TIMESTAMP, executiveno VARCHAR(20), audio LONGBLOB, location VARCHAR(30), time VARCHAR(30), customerno VARCHAR(20))";
            let sql = "INSERT INTO datareceived VALUES ?";
            let fetchedResults = [
                [
                   imei,
                    date,
                    executiveno, 
                    audio,
                    location, 
                    time, 
                    customerno
                ]
            ];
            // , [fetchedResults]
            console.log(fetchedResults);
            connectFetchData.query(sql, [fetchedResults], (err, result)=> {
                if(err){
                    console.log("error in query");
                    console.log(err);
                } else {
                    console.log(result);
                    res.status(200).send({
                        message: 'successful',
                        success: true
                    });
                }
            });
        }
    }); 
};

module.exports = {
    getData
};