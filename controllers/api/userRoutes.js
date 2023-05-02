// TODO: Import dependencies, including models
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

// TODO: Create new user (POST method with 'create') --> "sign-up"

// TODO: User /login route (POST method with 'findOne') --> "sign-in"
// checkPassword

// TODO: User /logout route (POST method with 'destroy') --> "logout"
module.exports = router;