let str1 = 'abc';
let str2 = 'abcdef';

console.log(str1, " ===> ", solution(str1));
console.log(str2, " ===> ", solution(str2));

console.log(str1, " ===> ", solution2(str1));
console.log(str2, " ===> ", solution2(str2));


function solution(str) {    // моя функция
  const myArray = [];
  if (str.length == 0) {
    return myArray;
  }

  k = 0;
  for (let i = 1; i <= str.length; i = i + 2) {
    myArray[k] = str.substr(i - 1, 2);
    k++;
  }

  if (str.length % 2 !== 0) {
    myArray[Math.floor(str.length / 2)] = myArray[Math.floor(str.length / 2)] + "_";
  }
  return myArray;
}

function solution2(str) {   // подсмотрел
  arr = [];
  for (let i = 0; i < str.length; i += 2) {
    second = str[i + 1] || '_';
    arr.push(str[i] + second);
  }
  return arr;
}