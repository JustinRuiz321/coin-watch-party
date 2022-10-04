const router = require('express').Router();
const { Coins } = require('../../modules');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newCoin = await Coins.create({
      ...req.body,
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


const options = {
  method: 'GET',
  url: 'https://bravenewcoin.p.rapidapi.com/market-cap',
  params: {assetId: 'f1ff77b6-3ab4-4719-9ded-2fc7e71cff1f'},
  headers: {
    Authorization: 'Bearer <append token here>',
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'bravenewcoin.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});



await fetch(new Request("https://api.livecoinwatch.com/coins/list"), {
  method: "POST",
  headers: new Headers({
    "content-type": "application/json",
    "x-api-key": "61d3b32e-4303-4e48-a0e6-5caf528b4c3a",
  }),
  body: JSON.stringify({
    currency: "USD",
    sort: "rank",
    order: "ascending",
    offset: 0,
    limit: 2,
    meta: false,
  }),
});

const dataAPI ='https://api.livecoinwatch.com/coins/list'
async function getAPI() {
  const response = await fetch(dataAPI)
  const data = await response.json();
  console.log(data)
}
getAPI()


