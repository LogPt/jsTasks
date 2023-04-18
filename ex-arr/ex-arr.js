const arr1 = new Array(100);
const arr2 = new Array(100);

// Заполняем массивы
for (let i = arr1.length - 1; i > 0; i -= 2) {
  arr1[i] = i;
  // console.log(arr1[i]);
};
console.log('arr1 = ', arr1);
for (let i = arr2.length - 1; i >= 0; i--) {
  arr2[i] = Math.floor(Math.random() * 100);
  // console.log(Math.floor(Math.random()*100));
};
console.log('arr2 = ', arr2);

// ---- Методы массивов ----------

// -----  Сумма элементов массива  ------
// Сумма просто циклом
let summ = 0;
for (let i = 0; i < arr2.length; i++) {
  summ = summ + arr2[i];
};
console.log('SUMM of arr2 by for = ', summ);
// Сумма методом Reduce 
let summ2 = arr2.reduce((acc, next) => acc + next, 0)
console.log('SUMM of arr2 by Reduce = ', summ2);
// Шуточный способ
console.log(eval(arr2.join('+')));

// Поиск Макс. и Миним. значений
max = min = arr2[0];
arr2.forEach(el => {
  max = max < el ? el : max;
  min = Math.min(el, min);
});
console.log('максим.значение через цикл = ', max);
console.log('максим.значение через ... = ', Math.max(...arr2));
console.log('максим.значение через apply = ', Math.max.apply(null, arr2));
console.log('миним.значение = ',min);
console.log('миним.значение через reduce = ', arr2.reduce((minim, next) => Math.min(minim, next)));
  

// Сортировка массива
let arr5 = [100, 0, 16, 2, 15];
console.log(arr5);
console.log(arr5.sort((x1, x2) => x1 - x2));
let users = [
  {
    name: 'Joahn',
    age: 23,
    city: 'NY'
    
    
  },
  {
    name: 'Dohn',
    age: 45,
    city: 'LA'
  },
  {name: 'Lee', age: 54, city: 'ALB'}
]
console.log('дан массив пользователей', users);
console.log('сортируем его по возрасту пользователей',users.sort((u1, u2) => u1.age - u2.age));
users.sort((u1, u2) => {
  if (u1.name < u2.name) return -1;
  if (u1.name == u2.name) return 0;
  return 1;
});
console.log('соритруем по имени пользователей ', users);
users.sort((u1, u2) => u2.city.localeCompare(u1.city));
console.log('соритруем по городу пользователей методом localeCompare по убыванию', users);




// метод сортирует содержимое arr
console.log('просто сортировка', arr2.sort());
arr2.sort((x1, x2) => x1 - x2);
console.log('поиск максимума методом сортировки, максим. = ', arr2[arr2.length - 1]);


// -----  Поиск в массиве  ------
// indexOf
console.log('indexOf 45 in arr2 =', arr2.indexOf(45));
console.log('last index of element = 45 is ', arr2.lastIndexOf(45));
console.log('indexOf 84 in arr2 =', arr2.indexOf(84));
console.log('lastIndexOf 84 in arr2 =', arr2.lastIndexOf(84));
console.log('indexOf 0 in arr2 =', arr2.indexOf(0));
console.log('indexOf 145 in arr2 =', arr2.indexOf(145));
console.log('indexOf 43 in arr2 after index 60 =', arr2.indexOf(45, 60));

// includes
console.log('arr2 includes 45 =', arr2.includes(45));
console.log('arr2 includes 45 after index 51 =', arr2.includes(45, 51));
// find, finfIndex
console.log('element=54 is ', arr2.find(el => el === 54));
console.log('index of element=54 is ', arr2.findIndex(el => el === 54));
console.log('last index of element=54 is ', arr2.findLastIndex(el => el === 54));
// filter
let results = arr2.filter(el => (el === 54 || el === 45 || el === 43 || el === 84));
let results2 = arr2.filter((el, index, arr) => el >= 34 && el <= 50);
let results3 = arr1.filter(Boolean);
console.log('отобрали 54,45,43,84;  results = ', results);
console.log('отобрали элементы со значениями от 34 до 50; results2 = ', results2);
console.log('отобрали непустые элементы из arr1 - arr1.filter(Boolean); results3 = ', results3);

// concat ()
let results4 = [];
console.log('соединяем 2 массива методом concat; results4 = ', results4.concat(results, results2))

// Добавление / удаление элементов
let arr = [];
console.log('создали пустой массив', arr);
arr.push(1, 2, 3);
console.log('arr.push добавили элементы 1,2,3   в конец', arr);
arr.pop();
console.log('извлекли элемент из конца', arr);
arr.unshift(1, 2, 3);
console.log('arr.unshift добавили элементы 1,2,3 в начало', arr);
arr.shift();
console.log('arr.shift удалили элемент в начале', arr);

// delete
delete arr[2];
console.log('delete arr[2] удалили элемент с идексом 2, но остался пустой элемент', arr);


// splice  and slice
myObject = {};
arr.splice(2,2, 'строка',myObject, 4567);
console.log('arr.splice(2,2) удяляем начиная с 2 индекса 2 элемента, вставляем на их место строку, объект и число ', arr);
arr.splice(2,0, 'строка', {}, [3,4,5]);
console.log('arr.splice(2,0 ...)  начиная с 2 индекса без удаления вставляем строку, объект и массив ', arr);
arr.splice(-1, 0, 'строка', 3, 4, 5);
console.log('arr.splice(-1 ,0 ...)  добавили перед последним элементом ', arr);

console.log('arr.slice(4, 7) новый массив из данного с элементами с 4 по 7 индекс = ', arr.slice(4, 7));


// Метод map
console.log('был такой массив', results);
console.log('создали из него такой методом map - умножили элемент на индек и на 10', results.map((item, index) => item * index * 10));
console.log('исходный массив не изменился', results);

// reverse
results.reverse()
console.log('реверсируем массив results.reverse(); исходный массив Изменился ', results);

console.log('реверсируем массив методом map', results.map((item, index, array) => array[array.length - 1 - index]));
let arr7 = [3,6,45,89,2,65,21,0,4];
console.log('дан массив', arr7);

console.log('реверсируем этот массив способом ...', 
[...arr7].map([].pop, arr7)
);



// join,  split
console.log('results.join(";") - делаем из массива строку, вставляя ";" между элементами', results.join(';'));
console.log('.split(";") - строку в массив по ";" ', results.join(';').split(';'));



// Метод Reduce
console.log('сумма элементов массива методом reduce',results.reduce((sum, item) => sum = sum + item, 0));
// console.log('сумма элементов массива методом reduce',results.reduce((sum, item) => sum = sum + item));
console.log('сумма элементов массива методом reduceRight', results.reduceRight((sum, item) => sum = sum + item, results.length));

// 
console.log('Array.isArray(results) - это массив? ', Array.isArray(results));

//
let arr4 = [3,6,8,9];
console.log(arr4);
arr4.length = 10;
console.log(arr4);
console.log(arr4.copyWithin(5, 0, 3));

// ...
let arr6 = [3, 6, 8, 9];
console.log(...arr6);




// console.log(arrFiltered);
// console.log(arrFiltered.filter(' '));

// arr.forEach((el) => {
//   k++;
//   el = k;
//   console.log(k, el);
// });