// при обращении к свойствам происходит "боксинг", обертка и как бы создание массива из примитива
var a = 'abcd';
console.log('дана строка ', a)
var b = a.length;
console.log('длина строки = ', b);

// Доступ к элементу строки (примитива) получить можем, но заменить его не можем.
console.log('первый элемент строки', a[0]);
a[0] = 'D';
console.log('первый элемент строки не изменился', a[0]);


// Просуммировать вложенные массивы. Вывернуть массивы
const arr = [
  [1, 2, [3, 4]],
  [9],
  [10, 12]
];
console.log('дан массив массивов', arr, 'найти сумму элементов');

console.log('находми сумму методом flat(Infinity) и reduce ', arr.flat(Infinity).reduce((acc, el) => acc = acc + el));

const result = flat(arr);
console.log('делаем массив плоским, т.е. выворачиваем его рекурсивной функцией flat ', result);
console.log('и затем находим сумму его элементов через reduce', result.reduce((acc, next) => acc = acc + next));

function flat(array) {
  let res = [];
  array.forEach(el => {
    if (Array.isArray(el)) {
      res = res.concat(flat(el));
    } else {
      res.push(el);
    }
  })
  return res;
}

// С ассинхронность задача

// for (var i = 0; i < 100; i++) {
//   setTimeout((n) => {
//     console.log(n);
//   }, 0, i);
// }

// Замыкание 

function createCalc(n) {
  return function () {
    console.log(100 * n)
  }
}

let calc = createCalc(3);
calc();

function createIncrementor(n) {
  return function (num) {
    return num + n;
  }
}

const addOne = createIncrementor(1);
console.log(addOne(11));
const addThree = createIncrementor(3);
console.log(addThree(20));

function urlGenerator(domain) {
  return function (url) {
    return `https://${url}.${domain}`
  }
}

const comUrl = urlGenerator('com');
console.log(comUrl('google'));
const ruUrl = urlGenerator('ru');
console.log(ruUrl('google'));

const person1 = {name:'Михаил', age: 22, job: 'Frontend'};
const person2 = {name:'Иван', age: 42, job: 'Backend'};

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}
function bind(context, fn) {
  return function(...args) {
    fn.apply(context, args)
  }
}
bind(person1, logPerson)();

// Ситуация 1
let name = "John";
function sayHi() {
  console.log("Hi, " + name);
}
sayHi();
name = "Pete";
sayHi();
sayHi("Ann");


// Ситуация 2
function makeWorker() {
  let name1 = "Pete";
  return function () {
    console.log(name1);
  };
}
let name1 = "John";
let work = makeWorker();
work();
