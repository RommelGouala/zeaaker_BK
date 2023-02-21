const e = require('express');
const jwt = require('jsonwebtoken')

function validateJWT(req, res, next) {
    const authHeader = req.headers['authorization']

    if (authHeader) {
        try {
            const token = authHeader
            const validToken = jwt.verify(token, process.env.JWT_SECRET)
            req.user = validToken
            next()
            return;
        } catch (error) {
            res.status(401).json({"message": "Unauth'd User message 2!"})
            return;
        }
    } else {
        res.status(401).json({"message": "Unauth'd User!"})
        return;
    }

}

module.exports = {
    validateJWT
}