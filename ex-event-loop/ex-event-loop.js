const btnSync = document.querySelector('.sync-regime');
const btnAsync = document.querySelector('.async-regime');
const clear = document.querySelector('.clear');
const text = document.querySelector('.message');

console.log('code starts');
fillText('code starts');

function fillText(str) {
  let message = "<p>" + str + "</p>";
  text.style.display = 'block';
  text.innerHTML += message;
};

function firstFun() {
  console.log('firstFun inside  secondFun starts');
  fillText('firstFun inside  secondFun starts');
  console.log('firstFun inside  secondFun ends');
  fillText('firstFun inside  secondFun ends');
};

function secondFun() {
  console.log('secondFun starts');
  fillText('secondFun starts');
  console.log('calling firstFun');
  fillText('calling firstFun');
  firstFun();
  console.log('secondFun ends');
  fillText('secondFun ends');
};

function someFunction() {
  console.log('someFunction starts');
  fillText('someFunction starts');
  setTimeout(() => {
    console.log('Timeout 3s finished');
    fillText('Timeout 3s finished');
  }, 3000);
  console.log('someFunction ends');
  fillText('someFunction ends');
}

btnSync.addEventListener('click', secondFun);

btnAsync.addEventListener('click', someFunction);

clear.addEventListener('click', () => {
  text.innerHTML = null;
  text.style.display = 'none';

});

console.log('code ends');
fillText('code ends');

//  2 переменные let и var  ведут по разному в этом коде
for (let i = 0; i < 10; i++) {
  console.log('outside setTimeout i =>>>', i);
  setTimeout(function () {
    console.log('inside setTimeout i =>>>', i);
  }, 100);
}

// About Scope

 var name = "Вася";

function sayHi() {
  console.log('inside sayHi name =>>>', name);
  console.log('inside sayHi typeof name =>>>',
    typeof (name));
}

setTimeout(function () {
  var name = "Петя";
    console.log('inside setTimeout name =>>>', name);
  sayHi();
}, 1000); 

console.log('inside global scope name =>>>', name);


// индикация прогресса
let i = 0;

function count() {
  
  
  // сделать часть крупной задачи (*)
  do {
    i++;
    progress.innerHTML = i;
  } while (i % 1e3 != 0);
  if (i < 1e6) {
    setTimeout(count);
    // queueMicrotask(count); //  отрисовка страницы происходит только в самом конце
  }
}


count();