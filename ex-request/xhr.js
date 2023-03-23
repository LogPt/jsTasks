const requestUrl = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response)
      } else {
        resolve(xhr.response);
      }
      // console.log(JSON.parse(xhr.response));
    }
    xhr.onerror = () => {
      console.log(xhr.response);
    }
    xhr.send(JSON.stringify(body));
  })
}

const body = {
  name: 'Jack',
  age: 20
}

sendRequest('GET', requestUrl)
  .then(data => console.log(data))
  .catch(err => console.log(err));
  
sendRequest('POST', requestUrl, body)
  .then(data => console.log(data))
  .catch(err => console.log(err));