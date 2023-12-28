const {
    body,
    param,
    query
} = require('express-validator')

const registerValidation = [
    body('name').notEmpty().trim().escape().isString().isLength({
        min: 2,
        max: 10
    }).withMessage('Name has to be between 2 and 10'),
    body('email').notEmpty().trim().escape().isString().isEmail().withMessage(`It isn't email`),
    body('password').notEmpty().trim().escape().isString().isLength({
        min: 3,
        max: 15
    }).withMessage('Password has to be between 3 and 15'),
]

const loginValidation = [
    body('email').notEmpty().trim().escape().isEmail().withMessage(`It isn't email`),
    body('password').notEmpty().trim().isString(),
]
const editValidation = [
    body('name').optional().trim().escape().isString().isLength({
        min: 2,
        max: 10
    }).withMessage('Name has to be between 2 and 10'),
    body('lastName').optional().trim().escape().isString().isLength({
        min: 2,
        max: 14
    }).withMessage('Name has to be between 2 and 14'),
    body('email').optional().trim().escape().isString().isEmail().withMessage(`It isn't email`),    
    body('gender').optional().trim().escape().isString(),
    body('photo').optional().trim().escape().isString(),  
]

const idValidation = param('id').notEmpty().escape()
const pageValidation = query('page').optional().isString()


module.exports = {
    idValidation,
    loginValidation,
    registerValidation,
    pageValidation,
    editValidation
}