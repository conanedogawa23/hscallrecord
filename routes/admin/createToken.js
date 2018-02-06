const jwt = require('jsonwebtoken');

const createToken = (user)=> {
    let secretKey = 'Your secretKey';
    let token = jwt.sign({
        firstname: user[0].firstname,
        username: user[0].username,
        lastname: user[0].lastname
    }, secretKey);
    return token;
};

module.exports = {
    createToken
};