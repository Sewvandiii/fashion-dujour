const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({

    adminEmail: {
        type: String,
        required: true
    },
    adminPassword: {
        type: String,
        required: true
    },

},
    { collection: 'AdminDetails' }
);

module.exports = mongoose.model('Admin', UsersSchema);