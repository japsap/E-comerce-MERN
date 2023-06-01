const catalogService = require("../Services/catalogService");
const CatalogCard = require('../Schema/CatalogCard');

exports.getAll = async (req, res) => {
  const catalog = await CatalogCard.find().lean();
  res.json({ status: 201, catalog })
};



exports.postCatalogCard = async (req, res) => {

  const quantity = 1;
  const favorite = false

  const { image, title, description, price, owner } = req.body;

    try {
     const catalogItem =  await catalogService.createOne(
        image,
        title,
        description,
        price,
        quantity,
        favorite,
        owner,
      );

    } catch (err) {
      const errors = Object.keys(err.errors).map(
        (keys) => err.errors[keys].message,
      );
      return res.status(404).json({ status: 404, error: errors });
    }
};


exports.getCatalogCard = async (req, res) => {
  const { cardId } = req.params;

  const card = await catalogService.getOne(cardId);
  res.status(201).json({status: 201, card })
}