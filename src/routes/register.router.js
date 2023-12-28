const express = require('express')
const registerController = require('../controllers/register.controller')

const router = express.Router()
const {
    registerValidation
} = require('../utils/validations')
/**
 * @swagger
 * /api/register/:
 *   post:
 *     tags:
 *       - Register
 *     requestBody:
 *       description: user
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *             type: object
 *             required: 
 *               - name
 *               - email
 *               - password
 *             properties: 
 *               name:
 *                 type: string
 *                 default: login
 *               email:
 *                 type: string
 *                 default: email@gmail.com
 *               password:
 *                 type: string
 *                 default: password              
 *     description: gets email, login and password. Checks if such user is exist is system and if is not returns registered user
 *     summary: use to register user
 *     responses:
 *       '201': 
 *         description: User registered succesfully
 *       '400': 
 *         description: Bad Request  
 */

router.post('/', registerValidation, registerController.register)

module.exports = router