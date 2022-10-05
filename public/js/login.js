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


