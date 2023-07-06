const sketchCont = document.getElementById("sketch-container");
const input = document.querySelector("#slider");
const gridSizeSpan = document.querySelector(".gridSize");
const clear = document.querySelector("#clearBtn")
const eraser = document.querySelector("#eraserBtn");
const blackPen  = document.querySelector("#blackBtn");
const rainbow = document.querySelector("#rainbowBtn");
var color = "black";
let isDrawing = false;


// create divs
function createDivs() {
  let gridSize = input.value;
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
    if (color === "rainbow") {
      divRow.style.backgroundColor = getRdmColor();
    } else {
    divRow.style.backgroundColor = color;
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
input.addEventListener("input", () => {
    gridSizeSpan.textContent = input.value + " x " + input.value;
});
input.addEventListener("input", createDivs);

clear.addEventListener("click", createDivs);

eraser.addEventListener("click", () => {
  color = "white";
});

blackBtn.addEventListener("click", () => {
  color = "black";
});

rainbow.addEventListener("click", () => {
  color = "rainbow";
});

// Functions for DOM functions
function getRdmColor() {
    return "hsla(" + (Math.random() * 360) + ", 100%, 50%, 1)";
}; 