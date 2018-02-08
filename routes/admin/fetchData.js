const mysql = require('mysql'),
    connectFetchData = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "mycalldb"
    });

const getData = (req, res, next)=> {

    connectFetchData.connect((err)=> {
        if(err) return err;
        console.log(`connected`);
        console.log('in get of data from api');
        console.log(req.files);
        console.log(req.body);
        //getData table creation
        //let sql = "CREATE TABLE datareceived (imei VARCHAR(10) NOT NULL, date TIMESTAMP NOT NULL, executiveno VARCHAR(20) NOT NULL, audio LONGBLOB NOT NULL, location VARCHAR(30) NOT NULL, time TIME, customerno VARCHAR(20) NOT NULL)";
        // let sql = "INSERT INTO datareceived VALUES ?";
        // let fetchedResults = [[

        // ]];
        // connectFetchData.query(sql, [fetchedResults], (err, result)=> {

        //     // console.log(`created table`);
        // });

        res.status(200).send({
            message: 'successful',
            success: true
        });
    }); 
};

module.exports = {
    getData
};