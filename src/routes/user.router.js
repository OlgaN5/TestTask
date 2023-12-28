const express = require('express')
const userController = require('../controllers/user.controller')

const router = express.Router()
const authenticate = require('../utils/authenticate')
const {
    idValidation,
    pageValidation,
    editValidation
} = require('../utils/validations')

/**
 * @swagger
 * /api/user/profile/{id}:
 *   get:
 *     tags: 
 *       - Users
 *     description: gets user by id
 *     summary: use to get user
 *     parameters:
 *       - name: id
 *         in: path
 *         type: string
 *         required: true
 *     responses:
 *       '200':
 *         description: Gotten
 *       '400':
 *         description: Bad Request 
 */
router.get('/profile/:id', idValidation, userController.getUser)
/**
 * @swagger
 * /api/user/profile:
 *   put:
 *     tags: 
 *       - Users
 *     description: edits profile
 *     summary: use to edit profile of user
 *     security: 
 *       - bearerAuth: []
 *     requestBody:
 *       description: user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 default: login
 *               name:
 *                 type: string
 *                 default: password
 *               lastName:
 *                 type: string
 *                 default: password
 *               gender:
 *                 type: string
 *                 default: password
 *               photo:
 *                 type: string
 *                 default: password
 *     responses:
 *       '200':
 *         description: Edited
 *       '400':
 *         description: Bad Request 
 *       '401':
 *         description: Unauthorized 

 */
router.put('/profile', editValidation, authenticate, userController.editUser)
/**
 * @swagger
 * /api/user/profiles:
 *   get:
 *     tags: 
 *       - Users
 *     description: gets all profiles
 *     summary: use to get list of users
 *     parameters:
 *       - name: page
 *         in: query
 *         required: false
 *     responses:
 *       '200':
 *         description: Succesful
 *       '400':
 *         description: Bad Request 
 */
router.get('/profiles', pageValidation, userController.getUsers)

module.exports = router