const str = ['1 + 1', '2 / 4', '1 & 5', 'I + 1', '3 - III', '10 + 9', 'X + X', 'I +', '1 + 1 + 1',   'VI / III', 'VII / III', 'X + II', 'XXI - I', 'X - II', '2 - 6', 'a + 4'
];

const romeNumbers = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX',
'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX',
'XX', 'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV', 'XXVI', 'XXVII', 'XXVIII', 'XXIX',
'XXX', 'XXXI', 'XXXII', 'XXXIII', 'XXXIV', 'XXXV', 'XXXVI', 'XXXVII', 'XXXVIII', 'XXXIX', 
'XL', 'XLI', 'XLII', 'XLIII', 'XLIV', 'XLV', 'XLVI', 'XLVII', 'XLVIII', 'XLIX',
'L', 'LI', 'LII', 'LIII', 'LIV', 'LV', 'LVI', 'LVII', 'LVIII', 'LIX',
'LX', 'LXI', 'LXII', 'LXIII', 'LXIV', 'LXV', 'LXVI', 'LXVII', 'LXVIII', 'LXIX',
'LXX', 'LXXI', 'LXXII', 'LXXIII', 'LXXIV', 'LXXV', 'LXXVI', 'LXXVII', 'LXXVIII', 'LXXIX',
'LXXX', 'LXXXI', 'LXXXII', 'LXXXIII', 'LXXXIV', 'LXXXV', 'LXXXVI', 'LXXXVII', 'LXXXVIII', 'LXXXIX',
'XC', 'XCI', 'XCII', 'XCIII', 'XCIV', 'XCV', 'XCVI', 'XCVII', 'XCVIII', 'XCIX',
'C'
];

const operators = ['+', '-', '/', '*'];

let string = str[6];

console.log(calculator(string));

function calculator(string) {
  let arr = [];

  arr = string.split(' ');
  // console.log(arr);
  try {
    validateString(arr);
  } catch (error) {
    console.log(error.message);
    // throw new Error1(error.message);
  }

  switch (arr[3]) {
    case 'Rome':
      arr[0] = romeNumbers.indexOf(arr[0]) + 1;
      arr[2] = romeNumbers.indexOf(arr[2]) + 1;
      // console.log(arr[0], arr[2]);
      let res = result(arr);
      if (res > 0) {
        return romeNumbers[res - 1];
      } else {
        return '';
      }

      case 'Arabic':
        return String(result(arr));
  }
}



function result(arr) {
  let res = parseInt(eval(arr[0] + arr[1] + arr[2]));
  return res;
}

function isNumber(num) {
  return typeof num === 'number' && !isNaN(num);
}


function validateString(arr) {
  let error1 = ' формат строки не удовлетворяет заданию - два операнда и один оператор';
  let error2 = ' строка не является математической операцией';
  let error3 = ' используются одновременно разные системы счисления';
  let error4 = ' в строке операнды не в диапазоне от 1 до 10';
  let error5 = ' в строке операнды не целые';
  let error6 = ' в строке не все операнды - числа';

  //  console.log(arr);
  if (arr.length > 3 || arr.length == 2) {
    throw new Error(string + error1);
  };

  if (arr.length == 1 || !operators.includes(arr[1])) {
    throw new Error(string + error2);
  };

  // console.log(isNumber(Number(arr[0])));
  if (romeNumbers.includes(arr[0]) && isNumber(Number(arr[2])) || isNumber(Number(arr[0]))  && romeNumbers.includes(arr[2])) {
    throw new Error(string + error3);
  };

  // console.log(romeNumbers.slice(0, 10));

  if (romeNumbers.slice(0, 10).includes(arr[0]) && romeNumbers.slice(0, 10).includes(arr[2]) && operators.includes(arr[1])) {
    arr.push('Rome');
    // console.log('римские числа');
    return arr;
  };

  // console.log(romeNumbers.slice(10, 20));

  if (Number(arr[0]) <= 0 || Number(arr[0]) > 10 || Number(arr[2]) <= 0 || Number(arr[2]) > 10 || romeNumbers.slice(10, 20).includes(arr[0]) || romeNumbers.slice(10, 20).includes(arr[2])) {
    throw new Error(string + error4);
  }

// console.log(isNumber(Number(arr[0])));
// console.log(isNumber(Number(arr[2])));
// console.log(isNumber(Number(arr[0]))  !== isNumber(Number(arr[2])));

  if (!isNumber(Number(arr[0])) || !isNumber(Number(arr[2]))) {
      throw new Error(string + error6);
    }



    if (Number(arr[0]) % parseInt(Number(arr[0])) !== 0 || Number(arr[2]) % parseInt(Number(arr[2])) !== 0) {
      throw new Error(string + error5);
    } else {
      arr.push('Arabic');
      // console.log('арабские числа');
      return arr;
    }


  }

  


// {/* <div><a href="https://planetcalc.com/377/" data-lang="ru" data-code=""
//   data - colors = "#263238,#435863,#090c0d,#fa7014,#fb9b5a,#c25004"
//   data - v = "4190" > PLANETCALC, Преобразование десятичного
//   числа в число, записанное римскими цифрами < /a> <
//     script src = "https://embed.planetcalc.com/widget.js?v=4190" > < /script> <
//     /div> */}


