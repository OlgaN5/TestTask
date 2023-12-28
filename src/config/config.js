const sentryInit = require('./sentry.config')
const cors = require('./cors.config')
const swaggerConfig = require('./swagger.config')
const db = require('./database')
const express = require('express')

module.exports = async function applyConfigSettings(app) {

    sentryInit(app)
    cors(app)
    await db.authenticate()
    // await db.sync({
    //     force: true
    // })
    app.use(express.json())
    swaggerConfig.initSwaggerDoc(app)
}