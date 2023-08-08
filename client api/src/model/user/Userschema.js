const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        maxlength: 50,
        required: true
    },
    company: {
        type: String,
        maxlength: 100,
        
    },
    address: {
        type: String,
        maxlength: 200,
      
    },
    phone: {
        type: Number,
        
        maxlength: 15,
       
    },
    email: {
        type: String,
        maxlength: 30,
        required: true
    },
    password: {
        type: String,
        
        required: true
    }
});



module.exports = 

{
    UserSchema:mongoose.model('User', UserSchema)
}