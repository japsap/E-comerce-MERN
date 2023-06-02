const { Schema, model, trusted } = require('mongoose');

const CatalogCard = new Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        reqired: true,
    },
    description: {
        type: String,
        reqired: true,
    },
    price: {
        type: Number,
        reqired: true,
    },
    favorite : {
        type: Boolean,
        required: true,
    },
    quantity : {
        type: Number,
        required: true
    }, 
    owner : {
        type: String,
        required: true
    },
})

const CatalogModel = model("CatalogCard", CatalogCard)

module.exports = CatalogModel;