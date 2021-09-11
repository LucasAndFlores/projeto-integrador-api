const Joi = require('joi')
const Categoriamiddleware = (schema, property) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body) 
        const valid = error == null

        if (valid) {
            next()
        } else {
            const { details } = error
            console.log(details)
            res.status(400).send(details[0].message)
        }
    }
}
module.exports = Categoriamiddleware