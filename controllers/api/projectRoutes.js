const router = require('express').Router();
const { Coins } = require('../../models');
const withAuth = require('../../utils/auth');

// Create Coin
router.post('/', withAuth, async (req, res) => {
  try {
    const newCoin = await Coins.create({
      name: req.body.name,
      description: req.body.description,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCoin);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const coinData = await   Coins.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!coinData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;