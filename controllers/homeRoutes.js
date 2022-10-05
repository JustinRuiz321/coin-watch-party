const router = require('express').Router();
const { User, Coins } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req , res) => {
    try {
        const coinData = await Coins.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        const coins = coinData.map((coin) => coin.get({ plain:true}));

        res.render('homepage' , {
            coins,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req,res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
})

router.get('/crypto' , async (req , res) => {
    try {
        const coinData = await Coins.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const coins = coinData.get({plain:true});

        res.render('coins', {
            ...coins,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/profile' , withAuth, async (req , res) => {
   try {
       const userData = await User.findByPk(req.session.user_id, {
           attributes: {exclude: ['password']} ,
           include: [{model: Project}],
       });

    const user = userData.get({ plain: true});

    res.render('profile', {
        ...user,
        logged_in: true
    });
   } catch (err) {
       res.status(500).json(err);
   }

});
module.exports = router;