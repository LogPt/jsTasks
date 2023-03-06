let right = "([{}])";
// let wrong = ")(()))";
let wrong = "[({})](][(])";
// let wrong = "[(])";
// [({})](]   //([{}])

console.log(wrong);
console.log(validBracesMine2(wrong));
console.log(right);
console.log(validBracesMine2(right));


function validBracesMine1(braces) { // подсмотрел на простых скобках и допилил для разных скобок
  let n = 0;
  while (braces.includes("()") || braces.includes("{}") || braces.includes("[]")) {
    braces = braces.replace("()", "");
    braces = braces.replace("{}", "");
    braces = braces.replace("[]", "");
    n++;
  }
  console.log(n);
  return (braces === "") ? true : false;
}

function validBracesMine2(braces) { // чуть улучшил replace, подсмотрел условия цикла
  let str = "";
  while (braces.length != str.length) {
    str = braces;
    braces = braces
      .replace("()", "")
      .replace("{}", "")
      .replace("[]", "");
  }
  return (braces === "") ? true : false;
}

function validBraces1(braces) {
  while (/\(\)|\{\}|\[\]/.test(braces)) {
    braces = braces.replace(/\(\)|\{\}|\[\]/, '');
  }
  return (braces.length > 0) ? false : true
}


const validBraces2 = braces =>
  ![...braces].reduce((pre, val) => (pre + val).replace(/(\(\)|\[]|{})/, ``), ``);