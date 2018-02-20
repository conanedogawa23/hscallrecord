const mysql = require('mysql'),
    tokenAuth = require('./createToken'),
    bcrypt = require('bcryptjs');

const comparePwd = (pass, authPwd)=> {
    return bcrypt.compareSync(pass, authPwd[0].password)
};

const adminSignin = (req, res, next)=> {
    const connectsql = mysql.createConnection({
        host: "localhost",
        user: "phpmyadmin",
        password: "mysql",
        database: "mycalldb"
    });

    connectsql.connect((err)=> {
        if(err) return err;
        console.log(req.body);
        let username = req.body.username,
        password = req.body.password;

        let queryValue = [[username]];
        let sql = "SELECT * FROM admin WHERE username = ?"

        connectsql.query(sql, [queryValue], (err, result)=> {
            if(err) {
                console.log('wrong username');
            } else{
                console.log(result);
                if(comparePwd(password, result)) {
                    let auth = tokenAuth.createToken(result);
                    res.status(200).send({
                        success: true,
                        token: auth
                    });
                } else {
                    res.status(404).send({
                        success: false,
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