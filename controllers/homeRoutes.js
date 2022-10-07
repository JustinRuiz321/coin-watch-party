const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/coin-list', async (req, res) => {
  try {
    const coinData = await Project.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const coins = coinData.map((project) => project.get({ plain: true }));

    res.render('homepage', { 
      coins, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/coin-list');
    return;
  }

  res.render('login');
});


router.get('/signup' , (req, res) => {
  res.render('signup');
})
module.exports = router;
