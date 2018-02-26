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
                let base = [];
                try {
                    for (let index = 0; index < result.length; index++) {
                        let file = fs.readFileSync(result[index].audiopath);
                        base[index] = file.toString('base64');
                    }            
                    res.status(200).send({
                        message: 'successful',
                        success: true,
                        data: base
                    });  
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