// bring in express
const express = require('express');



// grab our model
const Kitten = require('../models/kitten')

// instantiate the express router
const router = express.Router();

router.post('/', async (req, res) => {  

    const myKitten = await Kitten.create(req.body);
    await myKitten.save();

   res.send(myKitten + "your kitten has now found a home")


})



module.exports = router;
