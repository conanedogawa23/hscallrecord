const mysql = require('mysql'),
    multer = require('multer'),
    fs = require('fs'),
    duration = require('mp3-duration'),
    moment = require('moment');

const getData = (req, res, next)=> {

    const connectFetchData = mysql.createConnection({
        host: "localhost",
        user: "phpmyadmin",
        password: "mysql",
        database: "mycalldb"
    });

    
    //
    connectFetchData.connect((err)=> {
        if(err) {
            console.log('error in connection');
            console.log(err);
        } else {
            console.log('in query');
            //
            // let a = JSON.parse(JSON.stringify(req.files.files));
            // let a = JSON.stringify(req.files.files);
            // console.log(a);
            console.log(req.files);
            console.log(req.body);
            let time = moment(req.body.time).format('YYYY-MM-DD HH:mm:ss');
            console.log(time);
            try {
                fs.writeFileSync(__dirname+`/audio/${req.files.files.name}`);
            } catch(err) {
                console.log(err);
            }          
            
            let path = __dirname+`/audio/${req.files.files.name}`;
            console.log(path);

            duration(req.files.files.data, function (err, duration) {
                if (err) return console.log(err);
                console.log('Your file is ' + duration + ' seconds long');
            
                let customerno = req.body.cust,
                    executiveno = req.body.exec,
                    imeiCode = req.body.imei,
                    dateTime = time,
                    durationCall = `${duration}`,
                    location = req.body.location,
                    audioPath = `${path}`; 

                let dataReceived = [
                    [
                        customerno,
                        executiveno,
                        imeiCode,
                        dateTime,
                        durationCall,
                        location,
                        audioPath,
                        created_at = moment().format('YYYY-MM-DD HH:mm:ss')
                    ]
                ];

                console.log(dataReceived);

                let sql = "INSERT INTO datarec VALUES ?";
                // "CREATE TABLE datarec (customernumber VARCHAR(20) NOT NULL, executivenumber VARCHAR(20) NOT NULL, imeicode VARCHAR(20) NOT NULL, datetime TIMESTAMP, durationcall VARCHAR(20), location VARCHAR(20) NOT NULL, audiopath VARCHAR(100) NOT NULL)";
                // , executivenumber VARCHAR(20) NOT NULL, imeicode VARCHAR(20) NOT NULL, datetime TIMESTAMP, durationcall VARCHAR(20), location VARCHAR(20) NOT NULL, audiopath VARCHAR(100) NOT NULL)";
                // "INSERT INTO datarec VALUES ?";
                // 
                // 
                // "CREATE TABLE datarec (customernumber VARCHAR(20) NOT NULL, executivenumber VARCHAR(20) NOT NULL, imeicode VARCHAR(20) NOT NULL, datetime TIMESTAMP, durationcall VARCHAR(20), location VARCHAR(20) NOT NULL, audiopath VARCHAR(75) NOT NULL, created_at TIMESTAMP)"
                // "INSERT INTO datarec VALUES ?";
                // "CREATE TABLE datarec (customernumber VARCHAR(20) NOT NULL, executivenumber VARCHAR(20) NOT NULL, imeicode VARCHAR(20) NOT NULL, datetime TIMESTAMP, durationcall VARCHAR(20), location VARCHAR(20) NOT NULL, audiopath VARCHAR(75) NOT NULL)"
                console.log(sql);
                connectFetchData.query(sql, [dataReceived], (err, result)=> {
                    if (err) {
                        res.status(500).send({
                            message: 'data error',
                            success: false
                        });
                    } else {
                        console.log(result);
                        res.send(200).status({
                            success: true,
                            message: "data sent"
                        });
                    }
                    
                });
            });
            // console.log(req.files.files);  
            // 

        }
    }); 
};

module.exports = {
    getData
};