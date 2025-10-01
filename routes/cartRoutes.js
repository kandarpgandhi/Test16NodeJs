const express = require('express')
const route = express.Router()

route.get('/cart/:userId', (req, res) => {
    res.end(`Fetching cart for user with ID: ${req.params.userId}`)
})

route.post('/cart/:userId', (req, res) => {
    res.end(`Adding product to cart for user with ID: ${req.params.userId}`)
})

module.exports = route