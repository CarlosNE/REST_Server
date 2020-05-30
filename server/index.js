const express = require('express')
const app = express()
const mongoose = require('./database')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
//Settings
app.set('port', process.env.PORT || 3000)

//Middlewares
// app.use(express.static(__dirname));
//Static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());

//Routes
app.use('/', routes)


//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server running in port', app.get('port'))
})