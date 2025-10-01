const express = require('express')
const route = express.Router()

route.get('/products', (req, res) => {
    res.end("Fetching all products")
})

route.post('/products', (req, res) => {
    res.end('Adding a new product')
})

route.get('/products/:id', (req, res) => {
    res.end(`Fetching product with ID: ${req.params.id}`)
})

module.exports = route