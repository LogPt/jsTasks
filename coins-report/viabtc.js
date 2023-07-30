const url = 'https://www.viabtc.net/observer/dashboard?access_key=c9bfe7a7c29ebc1e3e71d81d4e24fbed&user_id=956257&coin=BTC&type=active'

const testUrl = (url) => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response;
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

async function start() {
  
  await testUrl(url)
  .then(data => {
    console.log(data);
  });
}