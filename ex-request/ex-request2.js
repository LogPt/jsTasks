const url1 = `https://jsonplaceholder.typicode.com/users`
const url2 = `https://ru.wikipedia.org/wiki/XMLHttpRequest`

const message = document.querySelector('.message');
const message2 = document.querySelector('.message2');
let messageText;

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (this.readyState == 0) {
    messageText = 'readyState = 0 (uninitialized)';
    console.log(messageText);
    makeMessage(messageText, message);
  }
  if (this.readyState == 1) {
    messageText = 'readyState = 1 (loading)';
    console.log(messageText);
    makeMessage(messageText, message);
  }
  if (this.readyState == 2) {
    messageText = 'readyState = 2 (loaded)';
    console.log(messageText);
    makeMessage(messageText, message);
  }
  if (this.readyState == 3) {
    messageText = 'readyState = 3 (interactive)';
    console.log(messageText);
    makeMessage(messageText, message);
  }
  if (this.readyState == 4 && this.status == 200) {
    messageText = 'readyState = 4 (complete) and status = 200';
    console.log(messageText);
    makeMessage(messageText, message);
    responseInJson = JSON.parse(xhr.response);
    responseInText = JSON.stringify(responseInJson);
    messageText = xhr.response;
    makeMessage(messageText, message);
    // console.log(responseInJson);
    // console.log(responseInText);
    // console.log(JSON.parse(JSON.stringify(xhr.response)));
    // console.log(xhr.response);
  }
};

let xhr2 = new XMLHttpRequest();
xhr2.onload = function () {
  messageText = `Статус загрузки: ${xhr2.status}`;
  makeMessage(messageText, message);
  console.log(messageText);
  messageText = `Загружено: ${xhr2.response}`;
  console.log(messageText);
  makeMessage(messageText, message);
};
xhr2.onerror = function () { // происходит, только когда запрос совсем не получилось выполнить
  messageText = `Ошибка соединения`;
  console.log(messageText);
  makeMessage(messageText, message);
};
xhr2.onprogress = function (event) { // запускается периодически
  // event.loaded - количество загруженных байт
  // event.lengthComputable = равно true, если сервер присылает заголовок Content-Length
  // event.total - количество байт всего (только если lengthComputable равно true)
  messageText = `Загружено ${event.loaded} из ${event.total}`;
  makeMessage(messageText, message);
};

// xhr.responseType = 'json';
// xhr2.responseType = 'json';

function sendRequest(params) {
  try {
    xhr.send();
    if (xhr.status != 200) {
      console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
      responseInJson = JSON.parse(xhr.response);
      responseInText = JSON.stringify(responseInJson);
      // console.log(responseInJson);
      // console.log(responseInText);
      // console.log(JSON.parse(JSON.stringify(xhr.response)));
      // console.log(xhr.response);
      console.log('sendRequest done');
    }
  } catch (err) {
    console.log('error', err);
  }
}

function sendRequest2(method, url, body = null) {
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

function makeMessage(messageText, block) {
  let messageString = document.createElement('p');
  messageString.innerText = messageText;
  block.append(messageString);
}

function makeMessageHeader(messageHeader, block) {
  block.style.display = 'block';
  block.innerHTML = messageHeader;
}

function buttonClick1() {
  clearClick(message);
  makeMessageHeader(`<h3> GET-запрос & readyState </h3>`, message);
  xhr.open('GET', url1, true);
  xhr.send();
}

function buttonClick2() {
  clearClick(message);
  makeMessageHeader(`<h3> GET-запрос & load/error/progress </h3>`, message);
  xhr2.open('GET', url1, true);
  xhr2.send();
}

function buttonClick3() {
  clearClick(message2);
  makeMessageHeader(`<h3> POST-запрос внутри Promise </h3>`, message2);

  sendRequest2('POST', url1, body)
    .then(data => {
      messageText = JSON.stringify(data);
      console.log(messageText);
      makeMessage(messageText, message2)
    })
    .catch(err => console.log(err));
}

function clearClick(block) {
  block.style.display = 'none';
  block.innerHTML = null;
}
