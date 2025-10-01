const express = require('express')
const route = express.Router()

route.get('/users', (req, res) => {
    res.end('Fetching all users')
})

route.post('/users', (req, res) => {
    res.end("Adding a new user")
})

route.get('/users/:id', (req, res) => {
    res.end(`Fetching user with ID: ${req.params.id}`)
})


module.exports = route