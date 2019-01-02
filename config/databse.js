const mongoose = require('mongoose');

const dbName = 'control_escolar_db';

module.exports = {
    connect: () => { mongoose.connect('mongodb://localhost:27017/' + dbName, { useNewUrlParser: true } )},
    dbName
}   