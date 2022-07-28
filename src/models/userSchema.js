const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    specialty: {
        type: String,
        required: true,
        enum:["psicologo", "terapeuta"]
    },
    registration: {
        type: String,
        required: false
    },
    timeWorking: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user', userSchema);