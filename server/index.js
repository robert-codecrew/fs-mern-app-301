// ? What do we need to set up our Node/Epress Server?
    // TODO: Require the dotenv module and configure it. 
'use strict';

require('dotenv').config();

    // TODO: Require the Express module.
const express = require('express');
const bodyparser = require('body-parser')


    // TODO: Require the cors module
const cors = require('cors');


 // TODO: Require the Mongoose module.
const mongoose = require('mongoose');


// TODO: Require the Kitten Route
const kittyHandler = require('./routes/kittensRoute');
const postKittens = require('./routes/postKittens');
const updateKittenHandler = require('./routes/updateKittens');
    // TODO: * Require the Axios module *

    // TODO: Instantiate Express 
const app = express();

    // TODO: Use cors in the Express Instance
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use('/kitten', kittyHandler);
app.use('/postKittens', postKittens);
app.use('/updateKitten', updateKittenHandler);

    // TODO: Define a port number for Express to serve requests from.
const port = process.env.port || 3002;



    
// ? What is new?
    //!: Mongoose and using a database (MongoDB) to persist data and make persistent changes to data
    //TODO:Configure mongoose by installing the NPM package and connecting to MongoDB via the cloud
mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log('Connected to Mongo'))
    .catch(err => console.log(err));


    //TODO: Create a data model (Schema) and save it on the cloud
    //TODO: Create instances of the data model
    //TODO: Save the instances (documents) to our database. 
    //TODO: Retrieve the instances from our database.

    
    
        // TODO: Configure a couple routes to "read" from.
app.get('/', (req, res) => {
    res.send({
        status: 200,
        message:" Everything is OK!"
    })
})

app.get('/home', (req, res) => { 
    res.send(' You are finally home, welcome!')
})



    // TODO: Turn on the Express server (Listen)
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    })
    

    
  