// const sequelize = require('../Config/database');
const jwt = require('jsonwebtoken');


const authController = {};

authController.signin = async (req, res, next) => {
    
    const {name, password} = req.body;

    if (name === 'anthonyca18m' & password === 'diosmio7gxxg7') {
        let token = await jwt.sign( { name, password }, 'jwt_key_diosmio7gxxg7' );
        res.json({token});
    } else {
        res.status(401).send({message: 'Usuario no autorizado'});
    }
};


module.exports = authController;
