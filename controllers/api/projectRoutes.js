const axios = require("axios");

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

console.log(assetId)