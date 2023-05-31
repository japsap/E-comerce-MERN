const { Schema, model, trusted } = require('mongoose');

const CatalogCard = new Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        reqired: true,
        minLength: [3, "Title too small.."]
    },
    description: {
        type: String,
        reqired: true,
        minLength: [10, "Description too small.."]
    },
    price: {
        type: Number,
        reqired: true,
    },
    favorite : {
        type: Boolean,
        required: true
    },
    quantity : {
        type: Number,
        required: true
    }, 
    owner : {
        type: String,
        required: true
    }
})

const CatalogModel = model("CatalogCard", CatalogCard)

module.exports = CatalogModel;