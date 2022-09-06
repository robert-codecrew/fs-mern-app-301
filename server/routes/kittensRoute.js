// bring in express
const express = require('express');

// grab our model
const Kitten = require('../models/kitten')

// instantiate the express router
const router = express.Router();
 
let allKittensArray = []


 
// TODO: Make some kittens programatically;
const fida = new Kitten({
    petName: 'Fida',
    age: 34,
    color:"golden"
})




// Make a route that send the users kittens
router.get('/', async (req, res) => {
 
    const allKittens = await Kitten.find({});

    allKittensArray.push(allKittens);
    
    res.send(allKittensArray);
})



// export the router instance
module.exports = router;


