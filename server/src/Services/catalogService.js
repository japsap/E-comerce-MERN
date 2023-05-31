const CatalogCard = require('../Schema/CatalogCard');

exports.createOne = (image, title, description, price, quantity, favorite, owner ) => 
    CatalogCard.create({ image, title, description, price, quantity, favorite, owner })

exports.getOne = (id) => CatalogCard.findById(id)