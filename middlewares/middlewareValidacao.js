const Joi = require('joi')
const middleware = (schema, property) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body) 
        const valid = error == null

        if (valid) {
            next()
        } else {
            const { details } = error
            res.status(400).send(details[0].message)
        }
    }
}
module.exports = middleware