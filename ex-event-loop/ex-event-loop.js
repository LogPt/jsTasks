const btnSync = document.querySelector('.sync-regime');
const btnAsync = document.querySelector('.async-regime');
const clear = document.querySelector('.clear');
const text = document.querySelector('.message');

console.log('code starts');
fillText('code starts');

function fillText(str) {
  let message = "<p>" + str + "</p>";
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
});

console.log('code ends');
fillText('code ends');