const mongoose = require('mongoose')

const Schema = mongoose.Schema

const HeroeSchema = new Schema({
    name: { type: String, required: true },
    power: { type: String, required: true },
    firstAppearance: { type: String, required: true },
    universe: { type: String, required: true },
    img: { type: String, required: true }
})


module.exports = mongoose.model('Heroe', HeroeSchema)