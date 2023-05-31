const catalogService = require("../Services/catalogService");

exports.getAll = (req, res) => {};

exports.postCatalogCard = async (req, res) => {

  const favorite = false;
  const quantity = 1;
  
  const { image, title, description, price } = req.body;

    try {
      const newCard = await catalogService.createOne({
        image,
        title,
        description,
        price,
        favorite,
        quantity,
        owner,
      });

    } catch (err) {
      const errors = Object.keys(err.errors).map(
        (keys) => err.errors[keys].message,
      );
      return res.status(404).json({ status: 404, error: errors });
    }
};
