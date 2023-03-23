const message = document.querySelector('.message');
const requestUrl = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
  const param = {
    method: method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if (method !== 'POST') {
    param.body = null;
  }
  // console.log(param);

  return fetch(url, param).then(responce => {
    if (responce.ok) {
      return responce.json()
    }
    return responce.json().then(error => {
      const er = new Error(`Ошибка ${error}`);
      er.data = error;
      throw er;
    })
  })
}

function sendXhrRequest(method, url, body = null) {
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

const bodyToSend = {
  name: 'Jack',
  age: 20,
  city: 'NY',
  gender: 'male'
};


function clearClick() {
  message.style.display = 'none';
  message.innerHTML = null;
}

function fetchPostClick() {
  if (message.style.display !== 'none') {
    clearClick();
  }
  message.style.display = 'block';
  let messageHeader = `<h3>Запрос Fetch по адресу <br> <a href="${requestUrl}">${requestUrl}</a></h3>`;
  message.innerHTML = messageHeader;
  let messageSubHeader = document.createElement('h4');
  let messageString = document.createElement('p');

  messageSubHeader.innerText = 'Запрос типа POST';
  message.append(messageSubHeader);
  sendRequest('POST', requestUrl, bodyToSend)
    .then(data => {
      console.log(data);
      messageString.innerHTML = `<p>${JSON.stringify(data)}</p>`;
      message.append(messageString);
    })
    .catch(err => {
      console.log(err);
      messageString.innerText = JSON.stringify(err);
      message.append(messageString);
    });
}

function fetchGetClick() {
  if (message.style.display !== 'none') {
    clearClick();
  }
  message.style.display = 'block';
  let messageHeader = `<h3>Запрос Fetch по адресу <br> <a href="${requestUrl}">${requestUrl}</a></h3>`;
  message.innerHTML = messageHeader;
  let messageSubHeader = document.createElement('h4');
  let messageString = document.createElement('p');

  messageSubHeader.innerText = 'Запрос типа GET';
  message.append(messageSubHeader);
  sendRequest('GET', requestUrl)
    .then(data => {
      console.log(data);
      data.forEach(el => {
        console.log(el);
        messageString.innerHTML += `<p>${JSON.stringify(el)}</p>`;
      });
      message.append(messageString);
    })
    .catch(err => {
      console.log(err);
      messageString.innerText = JSON.stringify(err);
      message.append(messageString);
    });
}

function xhrPostClick() {
  if (message.style.display !== 'none') {
    clearClick();
  }
  message.style.display = 'block';
  let messageHeader = `<h3>Запрос XHR по адресу <br> <a href="${requestUrl}">${requestUrl}</a></h3>`;
  message.innerHTML = messageHeader;
  let messageSubHeader = document.createElement('h4');
  let messageString = document.createElement('p');

  messageSubHeader.innerText = 'Запрос типа POST';
  message.append(messageSubHeader);
  sendXhrRequest('POST', requestUrl, bodyToSend)
    .then(data => {
      console.log(data);
      messageString.innerHTML = `<p>${JSON.stringify(data)}</p>`;
      message.append(messageString);
    })
    .catch(err => {
      console.log(err);
      messageString.innerText = JSON.stringify(err);
      message.append(messageString);
    });
}

function xhrGetClick() {
  if (message.style.display !== 'none') {
    clearClick();
  }
  message.style.display = 'block';
  let messageHeader = `<h3>Запрос XHR по адресу <br> <a href="${requestUrl}">${requestUrl}</a></h3>`;
  message.innerHTML = messageHeader;
  let messageSubHeader = document.createElement('h4');
  let messageString = document.createElement('p');

  messageSubHeader.innerText = 'Запрос типа GET';
  message.append(messageSubHeader);
  sendXhrRequest('GET', requestUrl)
    .then(data => {
      console.log(data);
      data.forEach(el => {
        console.log(el);
        messageString.innerHTML += `<p>${JSON.stringify(el)}</p>`;
      });
      message.append(messageString);
    })
    .catch(err => {
      console.log(err);
      messageString.innerText = JSON.stringify(err);
      message.append(messageString);
    });
}