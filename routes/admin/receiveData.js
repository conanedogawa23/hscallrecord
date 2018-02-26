const mysql = require('mysql'),
    fs = require('fs');

const retrieveData = (req, res, next)=> {
    let connectFetchData = mysql.createConnection({
        host: "localhost",
        user: "phpmyadmin",
        password: "mysql",
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
            if (err) {
                console.log(err);
            } else {
                let file = __dirname+`/audio/Kalimba.mp3`;
                console.log(file);
                try{
                    function base64_encode(file) {
                        // read binary data
                        var bitmap = fs.readFileSync(file, (err, data)=> {
                            if(err) console.log(err);
                        });
                        // convert binary data to base64 encoded string
                        return new Buffer(bitmap).toString('base64');
                    }
                    
                    console.log(base64_encode(file));
                    // res.status(200).send({
                    //     message: 'successful',
                    //     success: true,
                    //     data: base
                    // });  
                } catch(er){
                    console.log(er);
                }
            }
        });
    });
};

module.exports = {
    retrieveData
};