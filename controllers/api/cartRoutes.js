const router = require('express').Router();
const { Shirt, User, ShirtOrder } = require('../../models');
const withAuth = require('../../utils/auth');

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
  
  // route for updating a new shirt order
  router.put("/:id", withAuth, async (req, res) => {
    try {
      const updateCart = await ShirtOrder.update(req.body, {
        where: { id: req.params.id },
      });
  
      if (!updateCart) {
        res.status(404).json({ message: `No record exists of a shirt order with an id of ${req.params.id}` });
        return;
      }
  
      res.status(200).json(updateCart);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  // route for deleting a shirt order
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const deleteCart = await ShirtOrder.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!deleteCart) {
        res.status(404).json({ message: `No record exists of a shirt order with an id of ${req.params.id}` });
        return;
      }
  
      res.status(200).json(deleteCart);
    } catch (err) {
      res.status(500).json(err);
    }
  });  
  
  module.exports = router;