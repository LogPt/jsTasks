const array = [43, 67, 34, 65, 89, 7, 3, 9, 23, 112, 78, 34, 67, 9, 0, -1, -13, 1000, -234];

function linearSearch(array, numFind) {
  let count = 0;
  let found = 0;
  for (let i = 0; i < array.length; i++) {
    count++
    if (array[i] === numFind) {
      found++;
      console.log(`Found ${numFind} on the position ${i} in ${count} step(s)`);
    }
  }
  if (found === 0) {
    console.log(`${numFind} not found in Array`);
  }
}

function binarySearch(array, numFind) {
  array.sort((a, b) => a - b);

  let count = 0;
  let found = false;
  let position = -1;
  let start = 0;
  let end = array.length;
  let middle;
  while (found === false && start <= end) {
    middle = Math.floor((end + start) / 2);
    count++;
    if (array[middle] === numFind) {
      found = true;
      position = middle;
      console.log(`Found ${numFind} on the position ${position} in ${count} step(s)`);
      return;
    }
    if (numFind < middle) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  console.log(`${numFind} not found in Array`);
  return;
}

function selectionSort(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      count++;
    }
    let temp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = temp;
  }
  console.log(array);
  console.log(`${count} steps`);
    console.log(`length^2 = ${(array.length**2)}`);
}

function bubbleSort(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {

      if (array[j + 1] < array[j]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
      count++;
    }
  }
  console.log(array);
  console.log(`${count} steps`);
  console.log(`length^2 = ${(array.length**2)}`);
}

// linearSearch(array, 0);
//binarySearch(array, 0);
//selectionSort(array);
bubbleSort(array);