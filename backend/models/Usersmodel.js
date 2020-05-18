const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    
    categoryId: {
        type: String,
        required: true
    },
    categoryName: {
        type: String,
        required: true
    }
}, 
{collection: 'Categories'}
);

module.exports = mongoose.model('Users', UsersSchema);