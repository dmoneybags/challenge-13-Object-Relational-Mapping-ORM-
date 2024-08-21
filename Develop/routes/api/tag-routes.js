const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  const tags = await Tag.findAll({
    include: [
      {
        model: Product
      }
    ]
  })
  res.json(tags);
});

router.get('/:id', async (req, res) => {
  const tag = await Tag.findOne({
    where: {
      id: req.params.id
    }
  })
  res.json(tag);
});

router.post('/', async (req, res) => {
  const product = await Tag.create(req.body)
  res.json(product);
});

router.put('/:id', async (req, res) => {
  const tag = await Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  res.json(tag);
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const result = await Tag.destroy({
    where: {
      id: id
    }
  });
  res.json(result);
});

module.exports = router;
