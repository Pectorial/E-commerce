const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Product = mongoose.model('User', ProductSchema);

const ProductSchema = new Schema({
title: {
    type: String,
    required: true
},
imageUrl: {
    type: String,
    required: true
},
description: {
    type: String,
    required: true
},
status: {
 type: Boolean,
},
createdBy: {
type: Schema.Types.ObjectId,
ref: 'User'
}
}, ({timestamps: true}))

exports.module = Product