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

// ******GET RID OF 'UPDATE' SHIRT OPTION??? (A PUT method is NOT required for our project, so could be easier to keep it simple without the UPDATE option)

// route for updating a new shirt order
// router.put("/:id", withAuth, async (req, res) => {
//   try {
//     const updateCart = await ShirtOrder.update(req.body, {
//       where: { id: req.params.id },
//     });

//     if (!updateCart) {
//       res.status(404).json({ message: `No record exists of a shirt order with an id of ${req.params.id}` });
//       return;
//     }

//     res.status(200).json(updateCart);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// *****GET RID OF 'DELETE' SHIRT OPTION??? (A DELETE method is NOT required for our project, so could be easier to keep it simple without the DELETE option)

// route for deleting a shirt order
// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const deleteCart = await ShirtOrder.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!deleteCart) {
//       res.status(404).json({ message: `No record exists of a shirt order with an id of ${req.params.id}` });
//       return;
//     }

//     res.status(200).json(deleteCart);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });  

module.exports = router;