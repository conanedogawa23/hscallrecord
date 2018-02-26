const mysql = require('mysql'),
    fs = require('fs');

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
            if (err) {
                console.log(err);
            } else {
                let file = __dirname+`/Kalimba.mp3`;
                console.log(file);
                try{
                    function base64_encode(file) {
                        // read binary data
                        var bitmap = fs.readFile(file, {encoding: 'base64'}, (err, data)=> {
                            if(err) console.log(err);
                        });
                        // convert binary data to base64 encoded string
                        return bitmap;
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