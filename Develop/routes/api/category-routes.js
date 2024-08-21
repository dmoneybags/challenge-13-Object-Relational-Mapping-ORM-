const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const categories = await Category.findAll({
    include: [{
      model: Product
    }]
  })
  return res.status(200).json(categories);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const category = await Category.findOne({
    where: {
      id: id
    },
    include: [{
      model: Product
    }]
  })
  return res.status(200).json(category);
});

router.post('/',  async (req, res) => {
  const categoryData = req.body;
  const category = await Category.create(categoryData);
  return res.status(200).json(category);
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  const category = await Category.update(updatedData, {
      where: {
        id: id
    }
  });
  return res.status(200).json(category);
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const category = await Category.destroy({
      where: {
        id: id
    }
  });
  return res.status(200).json({message: "success"});
});

module.exports = router;
