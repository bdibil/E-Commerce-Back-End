const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all Categories and associated Products

  try {
    const getCategories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(getCategories);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/:id', async (req, res) => {
  // find one category by its `id` and associated Products

  try {
    const getCategories = await Category.findByPk(req.params.id, {include: [{ model: Product }], });
    if (!getCategories) {
      res.status(404).json({message: 'No such Product ID was found!'});
      return;
    }
    res.status(200).json(getCategories);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

router.post('/', async (req, res) => {
  // create a new category
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
