'use strict';
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
require('dotenv').config();
const app = express();
app.use(cors());


const client = jwksClient({
  jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
});


const getKey=(header, callback)=>{
  client.getSigningKey(header.kid, function(err, key) {
      const signingKey = key.publicKey || key.rsaPublicKey;
      callback(null, signingKey);
    });
}

app.get('/authorize',(req,res)=>{
  const token=req.headers.authorization.split(' ')[1];
  jwt.verify(token,getKey,{},(err,user)=>{
      if(err){
          res.send('invalid token');
      }
      res.send(user)
  })
  res.send(token);
});


app.listen(process.env.PORT,()=>{
  console.log(`listening to port: ${process.env.PORT}`);
})