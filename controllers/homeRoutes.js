const router = require('express').Router();
const { User, Shirt, ShirtOrder } = require('../models');
const withAuth = require('../utils/auth');

// (Temporary code we used for testing to open a 'homepage' in browser)
router.get('/', async (req, res) => {
  try {
    const shirtData = await Shirt.findAll({
      attributes: ['id', 'cohort_name', 'price'],
    });
    console.log(shirtData);
    const shirts = shirtData.map((shirt) => shirt.get({ plain: true })); 
    res.render('homepage', {
      shirts,
      logged_in: req.session.logged_in,
    });
    console.log(shirts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', withAuth, async (req, res) => {
  try {
    
    res.render('profile', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  } else
  res.render('login');
});

// 
router.get('/logout', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  req.session.destroy(() => {
  res.render('/');
  })
});

// Routes the user to a page specific to a single shirt. 
router.get('/shirt/:id', withAuth, async (req, res) => {
  try {
    // Get specific shirt data
    const shirtData = await Shirt.findByPk(req.params.id);

    const shirt = shirtData.get({ plain: true });

    console.log(shirt.id)

    res.render('shirtform', {
      ...shirt,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log("Error",err)
    res.status(500).json(err);
  }
});

// Routes the user to a page specific to a single shirt order. Have to be logged in to access route. 
// Changed '/cart/:id' to '/shirtOrder/:id'
router.get('/shirtOrder/:order_number', withAuth, async (req, res) => {
  try {
    const shirtOrderData = await ShirtOrder.findAll({
      where: {
        order_number: req.params.order_number,
      },
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
    if (!shirtOrderData) {
      res.status(404).json({ message: 'No shirtOrder with this id!' });
      return;
    }
    console.log(shirtOrderData[0]);
    res.render('cart', { logged_in: req.session.logged_in, shirtOrder: shirtOrderData[0].dataValues });
    // res.status(200).json(shirtOrderData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Routes user to their profile page where they can view their orders and information
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: ShirtOrder }],
    });

    const user = userData.get({ plain: true });

    console.log(user)

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO: Use express-session to store session data in a cookie

module.exports = router;