const mysql = require('mysql'),
    bcrypt = require('bcryptjs');

const connectsql = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mycalldb"
});

// const hashing = (password, next)=> {
//     bcrypt.hash(password, 10).then((hash)=> {
//         password = hash;
//     }).catch((err)=> console.log(err));
// };
const adminSignup = (req, res, next)=> {
    
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
                status]
            ];
            console.log(adminData);
            let sql = "INSERT INTO admin (firstname, phoneno, empid, username, lastname, password, status) VALUES ?";
            // sql = "CREATE TABLE admin (firstname VARCHAR(50) NOT NULL, phoneno VARCHAR(15) NOT NULL, empid VARCHAR(20) NOT NULL PRIMARY KEY, username VARCHAR(20) NOT NULL, lastname VARCHAR(50) NOT NULL, password VARCHAR(100) NOT NULL, created_at TIMESTAMP NOT NULL, updated_at TIMESTAMP, status CHAR(1) NOT NULL)"
            connectsql.query(sql, [adminData],(err, result)=> {
                if(err) return err;
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