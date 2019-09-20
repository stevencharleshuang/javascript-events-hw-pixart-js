/*
Commit 1
When you click on the Set Color button, it should change the color of the "brush" box to the color specified in the input field.
You can use document.querySelector (or another document method) to select the element, then add an event listener.
Hint: You'll notice that the page refreshes whenever you click the button. You need to prevent this from happening using a method you may not have used before. Search for "javascript event prevent default" on Google.

Commit 2
The same thing should happen when you press the Enter key from inside the input field.

Commit 3
Create 20 divs of the square class and append them to the body element.
Hint: Use .appendChild().

Commit 4
Add functionality so that, when you click on each square, it changes the color of that individual square to green.
Hint: Either add the event listener while creating the squares or listen for events on the body element.

Commit 5
Modify your code so that, when you click on each square, it changes to the color set using your input (instead of green) every time.
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
}

setColorBtn.addEventListener('click', handleSetColor);



