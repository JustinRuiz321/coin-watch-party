const router = require('express').Router();
const withAuth = require('../utils/auth');


router.get('/', async (req , res) => {

});

router.get('/crypto' , async (req , res) => {

});

router.get('/profile' , withAuth, async (req , res) => {

});


module.exports = routers;
