const mysql = require('mysql');

const connectsql = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mycalldb"
});

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
        status = 'y',
        created_at = Date.now(),
        updated_at = Date.now();
        let adminData = {
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            empid: empid,
            phoneno: phoneno,
            status: status,
            created_at: created_at,
            updated_at: updated_at
        };
        console.log(adminData);
        let query = "INSERT INTO ";
        res.status(200).send({
            success: true
        });
    });
};

module.exports = {
    adminSignup
};