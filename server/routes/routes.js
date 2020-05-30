const express = require('express')
const router = express.Router()
const heroeController = require('../controllers/heroeController')

router.get('/', heroeController.getHeroes)
router.get('/:id', heroeController.getHeroe)
router.get('/search/:text', heroeController.searchHeroe)
router.post('/', heroeController.createHeroe)
router.put('/:id', heroeController.updateHeroe)

module.exports = router