'use strict'

const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    name:{type:String},
    description:{type:String},
    status:{type:String},
})

// const booksModel = mongoose.model('books' , )
module.exports =bookSchema