const mongoose = require('mongoose')

mongoose.connect("mongodb://rislas:rislas5456@localhost:27017/?authMechanism=DEFAULT", { //Ingrese la db local de mongo
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel