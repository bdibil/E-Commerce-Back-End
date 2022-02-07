const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


// find all tags and associated Product data
router.get('/', async (req, res) => {
  try {
    const getTags = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(getTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find a single tag and associated Product data
router.get('/:id', async (req, res) => {

  try {
    const getTags = await Tag.findByPk(req.params.id, {include: [{ model: Product }], });
    if (!getTags) {
      res.status(404).json({message: 'No such Tag ID was found!'});
      return;
    }
    res.status(200).json(getTags);
  } catch (err) {
    res.status(500).json(err);
  }
  
});



router.post('/', async (req, res) => {
  // create a new tag
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
});


// delete a tag by its `id` value
router.delete('/:id', async (req, res) => {

  try {
    const delTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
   
    if (!delTag) {
      res.status(404).json({message: 'No such Tag ID was found!'});
      return;
    }
    res.status(200).json(delTag);
  } catch (err) {
    res.status(500).json(err);
  }


});

module.exports = router;
