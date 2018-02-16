const mysql = require('mysql');

const findData = (req, res, next)=> {
    let connectFindData = mysql.createConnection({
        host: "localhost",
        user: "phpmyadmin",
        password: "mysql",
        database: "mycalldb"
    });
    
    connectFindData.connect((err)=> {
        if(err) return err;
        let sql = "";
        connectFindData.query(sql, (err, results)=> {
            console.log(results);
            res.status(200).send({
                success: true,
                message: 'vallues',
                data: results
            });
        });
    });
};

module.exports = {
    findData
};