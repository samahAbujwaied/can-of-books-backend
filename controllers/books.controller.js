'use strict'

const userModel = require ('../modles/user.model')
const booksController = (req,res)=>
{
  let searchQuery=req.query.email;
  userModel.findOne({email:searchQuery},(err,user)=>{
      if(err){
          res.send('user not found')
      }
        res.json(user.books)
           
  } )

}
module.exports = booksController