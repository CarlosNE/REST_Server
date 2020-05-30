const mongoose = require('mongoose')
const URI = 'mongodb://localhost/heroes'


//DataBase MongoDB mongodb+srv://admin:admin@heroes-kej56.gcp.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('MongoDB is connected'))
    .catch(err => console.error('Error To Connect MongoDB', err))

module.exports = mongoose