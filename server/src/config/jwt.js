const token =require('jsonwebtoken');
const generateToken = (id) => {
    return token.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
}
module.exports = generateToken;