const express = require('express')

const {
    loginValidation
} = require('../utils/validations')

const router = express.Router()
const loginController = require('../controllers/login.controller')
/**
 * @swagger
 * /api/login/:
 *   post:
 *     tags: 
 *       - Login
 *     description: gets login and password. Checks if such user is exist is system and returns token if everything ok
 *     summary: use to get token and login user
 *     requestBody:
 *       description: user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: 
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 default: email@gmail.com
 *               password:
 *                 type: string
 *                 default: password
 *     responses:
 *       '200':
 *         description: Logged in
 *       '400':
 *         description: Bad Request 
 *       '401':
 *         description: Unauthorized 
 */
router.post('/', loginValidation, loginController.login)

module.exports = router