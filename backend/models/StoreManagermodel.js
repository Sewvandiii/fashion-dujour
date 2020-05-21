const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    
    managerName: {
        type: String,
       // required: true
    },
    companyName: {
        type: String,
      //  required: true
    },
    managerEmail: {
        type: String,
      //  required: true
    },
    password: {
        type: String,
      //  required: true
    },
    conPassword: {
        type: String,
     //   required: true
    },

}, 
{collection: 'StoreManager'}
);

module.exports = mongoose.model('Manager', UsersSchema);