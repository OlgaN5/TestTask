const userService = require('../services/user.service.js')
const {
    validationResult
} = require('express-validator')

const Sentry = require('@sentry/node')

class UserController {
    async getUser(req, res) {
        try {
            const result = validationResult(req)
            if (result.isEmpty()) {
                const conditions = {
                    id: req.params.id
                }
                const user = await userService.findUserByConditions(conditions)
                return res.send(user)
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
    async getUsers(req, res) {
        try {
            const result = validationResult(req)
            if (result.isEmpty()) {
                const users = await userService.findUsers(req.query.page)
                return res.send(users)
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
    async editUser(req, res) {
        try {
            const result = validationResult(req)
            if (result.isEmpty()) {
                const result = userService.editUser(req.userId, req.body)
                return res.send(result)
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

module.exports = new UserController()