const mysql = require('mysql'),
    bcrypt = require('bcryptjs'),
    moment = require('moment');

// const hashing = (password, next)=> {
//     bcrypt.hash(password, 10).then((hash)=> {
//         password = hash;
//     }).catch((err)=> console.log(err));
// };
const adminSignup = (req, res, next)=> {
    
    const connectsql = mysql.createConnection({
        host: "localhost",
        user: "phpmyadmin",
        password: "mysql",
        database: "mycalldb"
    });

    connectsql.connect(function(err){
        if(err) return err;
        console.log('connected!');
        let username = req.body.username,
        password = req.body.password,
        firstname = req.body.firstname,
        lastname = req.body.lastname,
        empid = req.body.id,
        phoneno = req.body.phone,
        status = 'y';

        bcrypt.hash(password, 10).then((hash)=> {
            password = hash;
            let adminData = [
                [firstname,
                phoneno,
                empid,
                username,
                lastname,
                password,
                created_at = moment().format('YYYY-MM-DD HH:mm:ss'),
                updated_at = moment().format('YYYY-MM-DD HH:mm:ss'),
                status]
            ];
            console.log(adminData);
            // let values = [[
            //   username,
            //   firstname  
            // ]];
            let sql = "INSERT INTO admin (firstname, phoneno, empid, username, lastname, password, created_at, updated_at, status) VALUES ?";
            // "CREATE TABLE admin (firstname VARCHAR(50) NOT NULL, phoneno VARCHAR(15) NOT NULL, empid VARCHAR(20) NOT NULL PRIMARY KEY, username VARCHAR(20) NOT NULL, lastname VARCHAR(50) NOT NULL, password VARCHAR(100) NOT NULL, created_at TIMESTAMP, updated_at TIMESTAMP NULL DEFAULT NULL, status CHAR(1) NOT NULL)";
            // "INSERT INTO admin (firstname, phoneno, empid, username, lastname, password, created_at, updated_at, status) VALUES ?";
            // "INSERT INTO admin (firstname, phoneno, empid, username, lastname, password, created_at, updated_at, status) VALUES ?";
            // "CREATE TABLE admin (firstname VARCHAR(50) NOT NULL, phoneno VARCHAR(15) NOT NULL, empid VARCHAR(20) NOT NULL PRIMARY KEY, username VARCHAR(20) NOT NULL, lastname VARCHAR(50) NOT NULL, password VARCHAR(100) NOT NULL, created_at TIMESTAMP, updated_at TIMESTAMP, status CHAR(1) NOT NULL)";
            // "INSERT INTO admin (firstname, phoneno, empid, username, lastname, password, status) VALUES ?";
            // "CREATE TABLE admin (firstname VARCHAR(50) NOT NULL, phoneno VARCHAR(15) NOT NULL, empid VARCHAR(20) NOT NULL PRIMARY KEY, username VARCHAR(20) NOT NULL, lastname VARCHAR(50) NOT NULL, password VARCHAR(100) NOT NULL, created_at TIMESTAMP NOT NULL, updated_at TIMESTAMP, status CHAR(1) NOT NULL)";
            // "INSERT INTO admin (firstname, phoneno, empid, username, lastname, password, status) VALUES ?";
            // "INSERT INTO trail (value, test) VALUES ?";
            // "CREATE TABLE trail (value VARCHAR(20), test VARCHAR(20))";
            // "INSERT INTO admin (firstname, phoneno, empid, username, lastname, password, status) VALUES ?";
            // "CREATE TABLE admin (firstname VARCHAR(50) NOT NULL, phoneno VARCHAR(15) NOT NULL, empid VARCHAR(20) NOT NULL PRIMARY KEY, username VARCHAR(20) NOT NULL, lastname VARCHAR(50) NOT NULL, password VARCHAR(100) NOT NULL, status CHAR(1) NOT NULL)";
            // "INSERT INTO admin (firstname, phoneno, empid, username, lastname, password, status) VALUES ?";
            // "CREATE TABLE admin (firstname VARCHAR(50) NOT NULL, phoneno VARCHAR(15) NOT NULL, empid VARCHAR(20) NOT NULL PRIMARY KEY, username VARCHAR(20) NOT NULL, lastname VARCHAR(50) NOT NULL, password VARCHAR(100) NOT NULL, status CHAR(1) NOT NULL)" 
            // "INSERT INTO admin (firstname, phoneno, empid, username, lastname, password, created_at, updated_at, status) VALUES ?";
            // console.log(sql);
            // let sql = "INSERT INTO test (value) VALUES ('test value')"
            // "CREATE TABLE testing (value JSON)";
            connectsql.query(sql, [adminData],(err, result)=> {
                if(err) console.log(err);
                console.log(result);
                res.status(200).send({
                    success: true
                });
            });
        });
        // let hashedPwd = hashing(password);
        // console.log(hashedPwd);
        // bcrypt.hash(password, 10).then((hash)=> {
        //     password = hash;
        //     console.log(password);
        // }).catch((err)=> console.log(err));
    });
};

module.exports = {
    adminSignup
};