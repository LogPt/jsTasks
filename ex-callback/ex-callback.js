// ----------- Первый пример - используем callback без ассинхронного кода
const arr = [1, 2, 6, 8, 3, 56, 23, 19, 43];

// Передаюм в функцию как аргумент callback
function foo(ar, callback) {
  callback(ar);
}

// Функции, которые будут вызваны, как   callback
function consoleArray1(data) {
  console.log(data.join(', '));
}
function consoleArray2(data) {
  console.log(data.join('-'));
}
function dataToPage(data) {
  const element = document.createElement('div');
  element.innerHTML = data.join(', ');
  const body = document.querySelector('body');
  body.append(element);
}

// Вызываем функции, передаем в них callback
foo(arr, consoleArray1);
foo(arr, consoleArray2);
foo(arr, dataToPage);

// ----------- Второй пример - используем callback с ассинхронным кодом

const url1 = 'https://cat-fact.herokuapp.com/facts';;
const url2 = 'https://jsonplaceholder.typicode.com/users';;

// Вызываемая функция, получила  callback как аргумент 
function getUsers(url, callback) {
  fetch(url)
    .then(responce => {
      return responce.json();
    })
    .then(data => {
      callback(data);;
    })
}

// Функции, которые будут вызваны, как   callback
function usersToConsole(data) {
  data.forEach(user => {
    console.log(`${user.name}, ${user.email}`);
  });
}
function usersToPage(data) {
  const element = document.createElement('div');
  const body = document.querySelector('body');
  data.forEach(user => {
    let userText = `${user.name}, ${user.email} <br>`;
    element.innerHTML += userText;
    body.append(element);
  });
}

// Вызываем функции, передаем в них callback
getUsers(url2, usersToConsole);
getUsers(url2, usersToPage);