let str = "moOse";

console.log(isIsogram(str));

function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}