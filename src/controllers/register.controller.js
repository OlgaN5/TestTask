const bcrypt = require('bcrypt')
const {
    validationResult
} = require('express-validator')

const Sentry = require('@sentry/node')
const userService = require('../services/user.service')
class RegisterController {
    async register(req, res) {
        try {
            const result = validationResult(req)
            if (result.isEmpty()) {
                const saltRounds = 4
                const {
                    email,
                    name,
                    password
                } = req.body
                const conditionsEmail = {
                    email
                }
                const isEmail = await userService.findUserByConditions(conditionsEmail)

                if (isEmail) {
                    return res.status(400).json({
                        message: 'email is exist'
                    })
                }

                const hashedPassword = await bcrypt.hashSync(password, saltRounds)
                const user = await userService.createUser({
                    email,
                    name,
                    password: hashedPassword
                })

                res.status(201)
                    .set('Status-Text', 'User created')
                    .send(user)
            } else {
                res.send({
                    error: result.array()
                })
            }
        } catch (e) {
            res.send(e.message)
            Sentry.captureException(e)
        }
    }
}
module.exports = new RegisterController()