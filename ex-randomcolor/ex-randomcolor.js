const colorBlock = document.querySelector('.color-block');
const colorNumber = document.querySelector('.color-number');
const colorText = document.createElement('p');
colorNumber.append(colorText);

function getRandomColor() {
  function getRandomNumber() {
    return Math.floor(Math.random() * 255);
  }
  return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
}

function setColor2Block() {
  let newColor = getRandomColor();
  colorBlock.style.backgroundColor = newColor;
  colorText.innerHTML = newColor;
  // console.log(newColor);
}
