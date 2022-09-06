// What is a PUT request
// A PUT request updates the document in its entirety
// A PUT request returns a new document.


'use strict';

const express = require('express');

// import the model
const Kitten = require('../models/kitten');

const router = express.Router();

// make a put route 
router.put('/:id', async (req, res) => {
    // need to access the model, and find the specific document and update Kitten with the mongoose Model.findOneAndUpdate() method

    // // object deconstructation
    // const { petName, age, color } = req.body;

    // const newKitten = await Kitten.findOneAndUpdate(
    //     // 1st parameter is a filter 
    //     { petName: petName },

    //     // 2nd paramter is the updated value(s)
    //     {
    //         color: color,
    //         age: age
    //     },
    //     { new: true }
    // );
    // res.send(newKitten);

    const _id = req.params.id;

    const newKitten = await Kitten.findByIdAndUpdate(
        { _id: _id },
        req.body,
        { new: true }
    );
 
    res.send(newKitten)

   

})



module.exports = router;



