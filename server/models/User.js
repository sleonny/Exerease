 const { Schema, model } = require('mongoose');
 const bcrypt = require('bcrypt');

 const userSchema = new Schema({
   user: {
     type: String,
     required: true,
     unique: true,
     trim: true,
   },
   email: {
     type: String,
     required: true,
     unique: true,
     match: [/.+@.+\..+/, 'Must match an email address!'],
   },
   password: {
     type: String,
     required: true,
     minlength: 8,
   },
    goals: [
     {
       type: String,
       required: false,
       trim: true,
     },
  ],
 });



 const User = model('User', userSchema); // Corrected model name
 
module.exports = User;
