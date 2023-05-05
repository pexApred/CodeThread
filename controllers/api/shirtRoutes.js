// TODO: Import dependencies, including models and withAuth
const router = require('express').Router();
const { Shirt, User, ShirtOrder } = require('../../models');
const withAuth = require('../../utils/auth');

// (Temporary code we used for testing to open a 'homepage' in broswer)
router.get('/', async (req, res) => {
    try {
      res.render('homepage');
    } catch (err) {
      res.status(500).json(err);
    }
});

// route for creating a new shirt
router.post('/', withAuth, async (req, res) => {
  try {
    const newShirt = await Shirt.create({
      ...req.body,
      user_id: req.session.user_id,
    });
  
    res.status(200).json(newShirt);
  } catch (err) {
    res.status(400).json(err);
  }
});

// route for updating a new shirt
router.put("/:id", withAuth, async (req, res) => {
  try {
    const updateShirt = await Shirt.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updateShirt) {
      res.status(404).json({ message: `No record exists of a shirt with an id of ${req.params.id}` });
      return;
    }

    res.status(200).json(updateShirt);
  } catch (err) {
    res.status(500).json(err);
  }
});


// route for deleting a shirt
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deleteShirt = await Shirt.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!deleteShirt) {
      res.status(404).json({ message: `No record exists of a shirt with an id of ${req.params.id}` });
      return;
    }

    res.status(200).json(deleteShirt);
  } catch (err) {
    res.status(500).json(err);
  }
});  

module.exports = router;