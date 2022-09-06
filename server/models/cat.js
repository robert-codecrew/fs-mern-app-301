//  ? What do we need to do to creat a new Schema
// TODO: 1st: Require the mongoose module
// TODO: 2nd  Destructure the mongoose module, extracting the Schema class
// TODO: 3rd: Create a new Schema and give it a memorable and descriptive name (catSchema)
// TODO: 4th: Compile the Schema using mongoose.model(); 
        //! The.model() function makes a copy of schema
// TODO: 5th: Export the model
const mongoose = require('mongoose');

const { Schema } = mongoose;

const catSchema = new Schema({
    name: String,
    color: String,
    hasClaws: Boolean,
    location: String,
})

const Cat = mongoose.model('Cat', catSchema);



module.exports = Cat;