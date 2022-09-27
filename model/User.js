const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const User = mongoose.model('User', UserSchema);

const UserSchema = new Schema({
name: {
    type: Schema,
    required: true
},
email: {
    type: String,
    required: true
},
password: {
    type: String,
    required: true
},
products: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
]
})

module.exports = User;