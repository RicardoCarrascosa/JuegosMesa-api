require('dotenv').config()

const express = require('express')
const { connectDB } = require('./src/config/db.js')
const { gamesRoutes } = require('./src/api/routes/games.js')
// const { userRoutes } = require('./src/api/routes/users.js')
const cloudinary = require('cloudinary').v2

const app = express()
app.use(express.json())
connectDB()

// Configurar cloudinary

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

// mainRoutes(app)

app.use('/api/v1/games', gamesRoutes)
// app.user('/api/v1/users', userRoutes)
// app.use('*', (req, res, next) => {
//   return res.status(404).json('route Not Found')
// })

app.listen(3000, () => {
  console.log('Servidor funcionando en http://localhost:3000')
})
