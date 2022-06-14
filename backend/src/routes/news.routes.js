const { Router } = require('express')

const router = Router()

// Importación controlador News

const { getNewById, getNews, createNew } = require('../controllers/news.controller')

router.get('/', getNews)

router.post('/', createNew)

router.get('/:newId', getNewById)

module.exports = router