const router = require('express').Router();

// (Temporary code we used for testing to open a 'homepage' in broswer)
router.get('/', async (req, res) => {
    try {
      res.render('homepage');
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // TODO: Use express-session to store session data in a cookie

module.exports = router;