// DOM Selectors
let setColorBtn = document.querySelector('#set-color');
let colorField  = document.querySelector('#color-field');
let brush       = document.querySelector('.brush');
let controls    = document.querySelector('.controls');

// Global Vars
let currentColor = '#1B4370';
let colorFieldValue;
let prevColor
let swatch;

/**
 * @name handleSetColor
 * @description 
 * Handles the click event when the 'Set Color' button is clicked. 
 * Sets the color of the brush box to the value of the input field.
 * @param { object } e The event object
 */
const handleSetColor = (e) => {
  e.preventDefault();
  colorFieldValue = colorField.value.toString();

  brush.style.background = colorFieldValue;
  prevColor = currentColor;
  currentColor = colorFieldValue;
  updateSwatches();
}

/**
 * @name handlePaintSquare
 * @description
 * Handles the mouseenter event when a 'canvas' square is moused over
 * 'Paints' the square the current selected color
 * @param { object } e The event object
 */
const handlePaintSquare = (e) => {
  e.target.style.background = currentColor;
}

setColorBtn.addEventListener('click', handleSetColor);

for (let i = 0; i < 8000; i += 1) {
  let square = document.createElement('div');
  square.setAttribute('class', 'square');
  document.body.append(square);
  square.addEventListener('mouseenter', handlePaintSquare);
}

/*
Bonus
Add a color swatch. You should have three boxes with the three most recent colors used. When you click on each of those boxes, it should set the current brush color back to that color.
*/
/**
 * @name handleSwatchSelect
 * @description
 * Handles the swatch click event
 * Updates the current selected 'brush' color to a recently used brush color from the selected swatch
 * @param { object } e The event object
 */
const handleSwatchSelect = (e) => {
  brush.style.background = e.target.style.background.toString();
  prevColor = currentColor;
  currentColor = e.target.style.background.toString();
  updateSwatches();
}

let swatchBox = document.createElement('div');
swatchBox.setAttribute('class', 'swatch-box');
controls.append(swatchBox);

for (let i = 0; i < 3; i += 1) {
  swatch = document.createElement('div');
  swatch.setAttribute('class', 'swatch');
  swatch.setAttribute('id', `swatch-${i + 1}`);
  swatchBox.append(swatch);
  swatch.addEventListener('click', handleSwatchSelect);
}

// DOM Selectors for Swatches
swatches = document.querySelectorAll('.swatch');
let swatch1 = document.querySelector('#swatch-1');
let swatch2 = document.querySelector('#swatch-2');
let swatch3 = document.querySelector('#swatch-3');

/**
 * @name updateSwatches
 * @description 
 * Updates each swatch to a respective recently selected color
 */
const updateSwatches = () => {
  swatch3.style.background = swatch2.style.background;
  swatch2.style.background = swatch1.style.background;
  swatch1.style.background = prevColor;
}


