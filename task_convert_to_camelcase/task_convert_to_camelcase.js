// Examples "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

let dashText = "the-stealth-warrior";
let underscoreText = "The_Stealth_Warrior";

function convert(string) {
  let arr = string.split('');
  arr.forEach((el, index, arr) => {
    if (el === '-' || el === '_') {
      arr[index + 1] = arr[index + 1].toLocaleUpperCase();
      delete arr[index];
    }
  });
  return (arr.join(''));
}

console.log(convert(dashText));

