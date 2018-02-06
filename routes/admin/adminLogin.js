const mysql = require('mysql'),
    tokenAuth = require('./createToken'),
    bcrypt = require('bcryptjs');

const connectsql = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mycalldb"
});

const comparePwd = (password, authPwd)=> {
    return bcrypt.compareSync(password, authPwd[0].password)
};

const adminSignin = (req, res, next)=> {

    connectsql.connect((err)=> {
        if(err) return err;
        let username = req.body.username,
        password = req.body.password;

        let queryValue = [[username]];
        let sql = "SELECT * FROM admin WHERE username = ?"

        connectsql.query(sql, [queryValue], (err, result)=> {
            if(err) {
                console.log('wrong username');
            } else{
                if(comparePwd(password, result)) {
                    let auth = tokenAuth.createToken(result);
                    res.status(200).send({
                        success: true,
                        token: auth
                    });
                } else {
                    res.status(200).send({
                        success: true,
                        message: 'password didnt match'
                    });
                }
            }
        });
    });
    console.log('signin');
};

module.exports = {
    adminSignin
};