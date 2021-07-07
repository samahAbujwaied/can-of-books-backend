'use strict'

const seedUser = require('../modles/user.model')
const homeController=(req,res)=>{
    const samahObject = seedUser();
    res.json(samahObject)
}
module.exports = homeController