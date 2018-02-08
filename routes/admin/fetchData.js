const mysql = require('mysql');
    

const getData = (req, res, next)=> {

    const connectFetchData = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "mycalldb"
    });
    
    connectFetchData.connect((err)=> {
        if(err) return err;
        console.log(`connected`);
        console.log('in get of data from api');
        console.log(req.files.file.data);
        console.log(req.body);
        let imei = req.body.imei,
            executiveno = req.body.executiveno,
            audio = req.files.file.data,
            location = req.body.location,
            time = req.body.time,
            customerno = req.body.customerno;
        //getData table creation
        //let sql = "CREATE TABLE datareceived (imei VARCHAR(10) NOT NULL, date TIMESTAMP NOT NULL, executiveno VARCHAR(20) NOT NULL, audio LONGBLOB NOT NULL, location VARCHAR(30) NOT NULL, time TIME, customerno VARCHAR(20) NOT NULL)";
        let sql = "INSERT INTO datareceived VALUES ?";
        let fetchedResults = [[
            imei, executiveno, audio, location, time, customerno
        ]];
        connectFetchData.query(sql, [fetchedResults], (err, result)=> {

            console.log(result);
            res.status(200).send({
                message: 'successful',
                success: true
            });
        });
    }); 
};

module.exports = {
    getData
};