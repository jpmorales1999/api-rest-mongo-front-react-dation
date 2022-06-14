// Importando el modelo de la base de datos
const New = require('../models/New')

const controllerNews = {}

controllerNews.createNew = async (req, res) => {
    const { title, content, category, like, imageURL } = req.body

    const newNew = new New({title, content, category, like, imageURL})

    const newSave = await newNew.save()

    res.status(200).json(newSave)
}

controllerNews.getNews = async (req, res) => {
    const newList = await New.find()

    res.status(200).json(newList)
}

controllerNews.getNewById = async (req, res) => {
    
    const newsResults = await New.find({ $or: [{category: { $regex: '.*' + req.params.newId + '.*', $options: 'i' }}, {title: { $regex: '.*' + req.params.newId + '.*', $options: 'i' }}] })

    res.status(200).json(newsResults)
}

module.exports = controllerNews