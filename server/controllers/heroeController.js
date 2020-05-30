const heroesModel = require('../models/model')
const heroeController = {}

heroeController.getHeroes = async(req, res) => {
    let heroes = await heroesModel.find()
    res.json(heroes)
}

heroeController.getHeroe = async(req, res) => {
    let heroe = await heroesModel.findById(req.params.id)
    res.json(heroe)
}

heroeController.searchHeroe = async(req, res) => {
    let text = req.params.text
    let heroe = await heroesModel.find({ name: text });
    res.json(heroe)
}

heroeController.createHeroe = async(req, res) => {
    let heroe = new heroesModel(req.body)
    await heroe.save()
    res.json({ heroe })
}

heroeController.updateHeroe = async(req, res) => {
    let id = req.params.id
    await heroesModel.findByIdAndUpdate(id, { $set: req.body }, { useFindAndModify: false })
    res.json('Heroe Updated Sucessfully')

}

module.exports = heroeController