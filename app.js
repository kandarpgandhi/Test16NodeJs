const express = require('express')
const app = express()
const userRouter = require('./routes/userRoutes')
const productRouter = require('./routes/productRoutes')
const cartRouter = require('./routes/cartRoutes')


app.use('/', userRouter)

app.use('/', productRouter)

app.use('/', cartRouter)

app.listen(3000, () => {
    console.log('Server is running')
})