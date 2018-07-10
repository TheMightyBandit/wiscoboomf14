const bcrypt = require('bcrypt');
const {MD5} = require('crypto-js');
const jwt = require('jsonwebtoken');

// bcrypt.genSalt(10,(err,salt)=>{
//   if(err) return next(err);
//
//   bcrypt.hash('password123',salt,(err,hash)=>{
//     if(err) return next(err);
//     console.log(hash)
//   })
// })

// const secret = 'mysecretpassword';
// const secretSalt = '654321654321654321654321'
//
// const user = {
//   id:1,
//   token: MD5('123456').toString() + secretSalt
// }
//
// const recievedToken = 'e10adc3949ba59abbe56e057f20f883e654321654321654321654321'
// if(recievedToken === user.token){
//   console.log('move forward')
// }
//
// console.log(user)

const id = '1000';
const secret = 'supersecret'

const recievedToken = 'eyJhbGciOiJIUzI1NiJ9.MTAwMA.L9PmEqLlZjettygguzj25agunJu6NkvVtG9RFRBnK2Y'

const token = jwt.sign(id,secret);
const decodeToken = jwt.verify(recievedToken,secret)

console.log(decodeToken)
