// TODO: Import dependencies, including models and withAuth
const router = require('express').Router();
const { Shirt } = require('../../models');
const withAuth = require('../../utils/auth');

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

module.exports = router;