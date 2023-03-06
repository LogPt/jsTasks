let str = "moOse"; //

console.log(isIsogram(str));

function isIsogram(str) {

  if (str.length == 0) {
    return true;
  }

  let dim = (str.split(''));
  console.log(dim);


  for (let i = 0; i < str.length; i++) {
    if (dim[i] == dim[i].toUpperCase()) {
      dim[i] = dim[i].toLowerCase();
    }
  }
  let dim1 = dim.sort();

  console.log(dim1);

  for (let i = 0; i < dim1.length; i++) {
    if (dim1[i] == dim1[i + 1]) {
            console.log(dim1[i], dim1[i + 1]);
                  return false;
      break;

    }
  }
        return true;
}