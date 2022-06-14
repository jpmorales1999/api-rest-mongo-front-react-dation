const mongoose = require('mongoose')

// Conectando a la base de datos MongoDB
mongoose.connect('mongodb+srv://dation:dation@cluster0.ecf3w.mongodb.net/?retryWrites=true&w=majority')
    .then(db => console.log('Base de datos Conectada'))
    .catch(error => console.log(error))
