const CatalogCard = require('../Schema/CatalogCard');

exports.createOne = (image, title, description, price, favorite, quantity, owner ) => 
    CatalogCard.create({ image, title, description, price, favorite, quantity, owner })

exports.getOne = (id) => CatalogCard.findById(id)