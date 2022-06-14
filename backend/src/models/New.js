const { Schema, model } = require('mongoose')

// Creando un modelo para las noticias

const newSchema = new Schema({
    title: String,
    content: String,
    category: String,
    imageURL: String,
    likes: []
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('New', newSchema)