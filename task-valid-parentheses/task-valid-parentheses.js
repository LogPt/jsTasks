let right = "(())((()())())";
// let wrong = ")(()))";
let wrong = "())((()())))";

console.log(wrong);
console.log(validParenthesesMine1(wrong));
console.log(validParenthesesMine2(wrong));
console.log(validParenthesesMine3(wrong));
console.log(validParentheses1(wrong));
console.log(validParentheses2(wrong));
console.log(validParentheses3(wrong));
console.log(validParentheses4(wrong));
// console.log("Hello!")

function validParenthesesMine1(parens) {  // сделал сначала
  let arr = parens.split('');
  let counter = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === '(') {
      counter += 1;
    }
    if (arr[i] === ')') {
      counter += -1;
    }
    if (counter < 0) {
      break;
    }
  };
  if (counter === 0) {
    return (true);
  } else {
    return (false);
  }
}

function validParenthesesMine2(parens) {  // убрал лишнее
  let counter = 0;
  for (let i = 0; i <= parens.length; i++) {
    // console.log(parens[i]);
    if (parens[i] === '(') {
      counter += 1;
    }
    if (parens[i] === ')') {
      counter += -1;
    }
    if (counter < 0) {
      break;
    }
  };
  return counter === 0;
};

function validParenthesesMine3(parens) {  // еще улучшил 
  let counter = 0;
  for (let i = 0; i <= parens.length; i++) {
    parens[i] === '(' ? counter++ : counter;
    parens[i] === ')' ? counter-- : counter;
    if (counter < 0) {
      break;
    }
    return counter === 0;
  };
};

function validParentheses1(parens) { // неправильно работает
  var cmp = 0;
  parens.split('').forEach(function (v) {
    cmp += v === '(' ? 1 : -1;
    cmp = Math.abs(cmp);
  });
  return cmp === 0;
}

function validParentheses2(parens) {
  while (/\(\)/.test(parens)) {
    parens = parens.replace(/\(\)/g, "");
  }
  return parens.length > 0 ? false : true;
}

function validParentheses3(parens) {
  return parens.split('').reduce(function (level, c) {
    return level >= 0 ? level + {
      '(': 1,
      ')': -1
    } [c] : -1;
  }, 0) === 0;
}

function validParentheses4(parens) {
  while (parens.indexOf('()') !== -1) {
    parens = parens.split('()').join('');
  }
  return parens.length === 0;
}

function validParentheses5(parens) {  // круто!!!
  while (parens.includes("()")) {
    parens = parens.replace("()", "")
  }
  return (parens === "") ? true : false
}