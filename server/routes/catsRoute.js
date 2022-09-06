const express = require('express');

const router = express.Router();

const Cat = require('../models/cat');



router.get('/', async function (req, res) { 
   
    res.send("hello world!");
    makeCat();
    
    
})

module.exports = router;

