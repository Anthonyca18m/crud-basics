const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {

    let token = req.headers['token'];

    if (!token) {
        res.send(401);
    } else {
        jwt.verify(token, 'jwt_key_diosmio7gxxg7', (err, decoded) => {
            if (err) {
                res.send(401);
            } else {
                next();
            }
        });
    }
};