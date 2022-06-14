// Importación express - Framework backend
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()


// Importación de Rutas
const routesNews = require('./routes/news.routes')

// Configuraciones
app.set('port', process.env.PORT || 4000)

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/api/news', routesNews)

module.exports = app