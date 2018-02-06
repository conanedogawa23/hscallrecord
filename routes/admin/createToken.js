const jwt = require('jsonwebtoken'),
    secretKey = 'Your secretKey';
const createToken = (user)=> { 
    let token = jwt.sign({
        firstname: user[0].firstname,
        username: user[0].username,
        lastname: user[0].lastname
    }, secretKey);
    return token;
};

module.exports = {
    createToken,
    secretKey
};