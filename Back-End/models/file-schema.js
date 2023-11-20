import mongoose from 'mongoose';
const { Schema } = mongoose


// Creating a new Schema object with the required fields 
const fileschema = new Schema({
    path: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    downloadContent: {
        type: Number,
        required: true,
        default: 0,
    },


});

// Exporting a Schema object and creacting a model instance from the schema object .
// mongoose.model(name of the database collection , name of schema object )
const Files = mongoose.model('file', fileschema);

export default Files;