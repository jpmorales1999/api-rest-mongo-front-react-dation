// Importación express - Framework backend
const express = require('express')
const cors = require('cors')

// Base de datos
require('./database')

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


// Correr Servidor

app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto', app.get('port'));
})