/*
Commit 6
Modify your code so that you're creating 8,000 divs instead of 20.
Modify the event that changes your box colors from click to mouseover.
Paint a picture.
Bonus
Add a color swatch. You should have three boxes with the three most recent colors used. When you click on each of those boxes, it should set the current brush color back to that color.
*/
/*
<body>
  <h1>Pixel Art!</h1>
  <div class="controls">
    <form id="form">
      <input type="text" id="color-field"></input>
      <button id="set-color">Set Color</button>
    </form>
    <div class="brush"></div>
  </div>
  <script src="pixart.js"></script>
</body>
*/

// DOM Selectors
let setColorBtn = document.querySelector('#set-color');
let colorField  = document.querySelector('#color-field');
let brush       = document.querySelector('.brush');

// Global Vars
let currentColor = '#1B4370';

/**
 * @name handleSetColor
 * @description 
 * Handles the click event when the 'Set Color' button is clicked. 
 * Sets the color of the brush box to the value of the input field.
 * @param { object } e: The event object
 */
const handleSetColor = (e) => {
  e.preventDefault();

  brush.style.background = colorField.value.toString();
  currentColor = colorField.value.toString();
}

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



