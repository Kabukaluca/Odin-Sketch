const sketchCont = document.getElementById("sketch-container");
const gridInput = document.querySelector("#slider");
const gridSizeSpan = document.querySelector(".gridSize");
const clear = document.querySelector("#clearBtn")
const eraser = document.querySelector("#eraserBtn");
const colorBtn = document.querySelector("#colorBtn");
const colorPick = document.querySelector("#colorPick");
const rainbow = document.querySelector("#rainbowBtn");
var color = colorPick.value;
let isDrawing = false;


// Set initial grid size
gridInput.value = 32;
gridSizeSpan.textContent = `${gridInput.value} x ${gridInput.value}`;


// create divs
function createDivs() {
  let gridSize = gridInput.value;
  sketchCont.innerHTML = "";
  for (let i = 0; i < gridSize; i++) {
    let divCol = document.createElement("div");
    divCol.classList.add("divCol");

    for (let j = 0; j < gridSize; j++) {
        let divRow = document.createElement("div");
        divRow.classList.add("divRow");
        divCol.appendChild(divRow);

        divRow.addEventListener("click", () => {
          divRow.style.backgroundColor = color;
        });
    }
  sketchCont.appendChild(divCol);
    }
};


//Handle drawing event
function handleDrawing (event) {
  if (isDrawing) {
    const divRow = event.target;
    if (divRow !== sketchCont) {
      if (color === "rainbow") {
        divRow.style.backgroundColor = getRdmColor();
      } else {
      divRow.style.backgroundColor = color;
      }
    }
  } 
};


//Eventlisteners for Drawing
sketchCont.addEventListener("mousedown", () => {
  isDrawing = true;
});

sketchCont.addEventListener("mouseup", () => {
  isDrawing = false;
});

sketchCont.addEventListener("mousemove", handleDrawing);

createDivs();


// DOM functions
gridInput.addEventListener("input", () => {
    gridSizeSpan.textContent = gridInput.value + " x " + gridInput.value;
});
gridInput.addEventListener("input", createDivs);

clear.addEventListener("click", createDivs);

eraser.addEventListener("click", () => {
  color = "white";
});

colorBtn.addEventListener("click", () => {
  color = colorPick.value;
});

colorPick.addEventListener("input", () => {
  color = colorPick.value;
});

rainbow.addEventListener("click", () => {
  color = "rainbow";
});


// Functions for DOM functions
function getRdmColor() {
    return "hsla(" + (Math.random() * 360) + ", 100%, 50%, 1)";
}; 