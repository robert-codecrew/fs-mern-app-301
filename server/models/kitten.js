'use strict';
// bring in mongoose
const mongoose = require('mongoose');

// create a Schema 
const kittenSchema = new mongoose.Schema({
    petName: String,
    age: Number,
    color: String,
})

// create a model
const kittenModel = mongoose.model('kitten', kittenSchema);

module.exports = kittenModel;






