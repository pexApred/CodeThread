const router = require('express').Router();
const { Shirt, User, ShirtOrder } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const cartData = await ShirtOrder.findByPk(req.params.id, {
      include: [
        {
          model: Shirt,
          attributes: ['id', 'price', 'cohort_name']
        },
        {
          model: User,
          attributes: ['id', 'name', 'email',]
        }
      ]
    });

    const cart = cartData.get({ plain: true });

    res.render('cart', {
      ...cart,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  };
});
// route for creating a new shirt
router.post('/', withAuth, async (req, res) => {
  try {
    const newCart = await ShirtOrder.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCart);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;