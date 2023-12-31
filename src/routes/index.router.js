// import express from 'express'
const express = require('express')
const registerRouter = require('./register.router')
const loginRouter = require('./login.router')
const userRouter = require('./user.router')

const router = express.Router()

router.use('/register', registerRouter)
router.use('/login', loginRouter)
router.use('/user', userRouter)

module.exports = router