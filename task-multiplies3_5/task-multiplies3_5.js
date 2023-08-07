function solution(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    i % 3 === 0 || i % 5 === 0 ? sum += i : null
  };
  return sum;
}

// solution(10);
console.log(solution(10));

var solution = n => [...Array(n)].reduce((t, c, i) => t + !(i % 3 * (i % 5)) * i, 0);


function solution(number, sum = 0) {
  return --number < 3 ?
    sum :
    number % 3 === 0 || number % 5 === 0 ?
    solution(number, sum + number) :
    solution(number, sum)

}

solution = n => n <= 0 ? 0 : Array.from({
  length: n
}, (_, i) => (i % 3 == 0 || i % 5 == 0) ? i : 0).reduce((x, y) => x + y)

const solution = (number) => Array(Math.abs(number)).fill().reduce((acc, _, i) => (!(i % 3) || !(i % 5) ? acc += i : acc, acc), 0);

function solution(number) {
  return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}

function solution(number) {
  var sum = 0;
  while (number > 0) {
    number--;
    sum += (!(number % 3)) ? number : (!(number % 5)) ? number : 0;
  }
  return sum;