const express = require('express')

const userRouter = require('../routes/user-router.js')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.json({message: "up"})
})

server.use('/api/', userRouter)

module.exports = server