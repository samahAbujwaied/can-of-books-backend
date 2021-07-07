'use strict'

const mongoose = require('mongoose');
const bookSchema =require('./books.model')
const userSchema = new mongoose.Schema({
    email:{type:String},
    books:[bookSchema]
})
const userModel = mongoose.model('userschema', userSchema)
module.exports = userModel


// const seedUser=()=>{
//     const TheEndLife = {
//         name:'life',
//         description:'autherd by noal',
//         status : 'active'
//     }
    
//     const math = {
//         name:'math',
//         description:'autherd by sahar',
//         status : 'active'
//     }
    
//     const syrianlife ={
//         name:'syrianlife',
//         description:'autherd by jan',
//         status : 'active'
//     } 
//     const samah = new userModel({
//        email : 'samah.abujweed@yahoo.com',
//        books:[TheEndLife,math,syrianlife]
//     })
//     samah.save();
//     console.log(samah);
//     return (samah);
// }

// module.exports = userModel