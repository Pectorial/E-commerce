const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Order = mongoose.model('Order', OrderSchema)

const OrderSchema = new Schema({
product: [
    {
        name: String,
        price: Number,
        quantity: Number,
        required: true
    },
],
date: { type: Date, default: Date.now },
})

exports.module = Order;
