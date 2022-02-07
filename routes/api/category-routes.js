const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


// find all Categories and associated Products
router.get('/', async (req, res) => {

  try {
    const getCategories = await Category.findAll({
      include: [Product]
    });
    res.status(200).json(getCategories);
  } catch (err) {
    res.status(500).json(err);
  }

});

// find one category by its `id` and associated Products
router.get('/:id', async (req, res) => {

  try {
    const getCategories = await Category.findByPk(req.params.id, {include: [Product] });
    if (!getCategories) {
      res.status(404).json({message: 'No such Product ID was found!'});
      return;
    }
    res.status(200).json(getCategories);
  } catch (err) {
    res.status(500).json(err);
  }
  
});


// create a new category
router.post('/', async (req, res) => {
  try {
    const addCat = await Category.create({
      category_name: req.body.category_name,
    });
   
    res.status(200).json(addCat);
  } catch (err) {
    res.status(400).json(err);
  }
  
});


// update a category by its `id` value
router.put('/:id', async (req, res) => {

  try {
    const updateCat = await Category.update(req.body, {
    where: {
      id: req.params.id,
    },
    category_name: req.body.category_name
    // Category.save()
  })
  res.status(200).json(updateCat);
  } catch (err) {
    res.status(400).json(err);
  }

});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  
  try {
    const delCat = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
   
    if (!delCat) {
      res.status(404).json({message: 'No such Category ID was found!'});
      return;
    }
    res.status(200).json(delCat);
  } catch (err) {
    res.status(500).json(err);
  }


});

module.exports = router;
