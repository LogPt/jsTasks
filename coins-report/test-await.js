const testAwait = (url) => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

let q = [1, 3, 6];
async function clickTest() {
  console.log('Start!');
  let url = 'https://jsonplaceholder.org/users';

  await Promise.all(q.map(async (q) => {
    await testAwait(url)
      .then(users => {
        console.log(users);
      });
  }));

  console.log('Done!');
}

const timerPromise = (timeOut) =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve(), timeOut))

const testAsync = async () => {
  console.log('Timer starts');

  await timerPromise(3000);

  console.log('Timer finished');

}