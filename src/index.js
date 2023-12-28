require('dotenv').config()


const express = require('express')

const indexRouter = require('./routes/index.router')
const applyConfigSettings = require('./config/config')

async function main() {

    const port = process.env.PORT || 4000
    app = express()
    await applyConfigSettings(app)
    server = app.listen(port, () => console.log(`port started on port ${port}`))
    app.use('/api', indexRouter)
}

main()