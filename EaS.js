const sketchCont = document.getElementById("sketch-container");
const gridInput = document.querySelector("#slider");
const gridSizeSpan = document.querySelector(".gridSize");
const clear = document.querySelector("#clearBtn")
const eraser = document.querySelector("#eraserBtn");
const colorBtn = document.querySelector("#colorBtn");
const colorPick = document.querySelector("#colorPick");
const rainbow = document.querySelector("#rainbowBtn");
const btnsActiveList = document.querySelectorAll(".btns");
// const header = document.querySelector("#header");
let activeBtn = null;
var color = colorPick.value;
let isDrawing = false;


// Set initial grid size
gridInput.value = 32;
gridSizeSpan.textContent = `${gridInput.value} x ${gridInput.value}`;


// Create divs
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


// Handle drawing event
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


// Eventlisteners for Drawing
sketchCont.addEventListener("mousedown", () => {
  isDrawing = true;
});

sketchCont.addEventListener("mouseup", () => {
  isDrawing = false;
});

sketchCont.addEventListener("mouseover", handleDrawing);

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
  updateActiveButtonBorderColor();
});

rainbow.addEventListener("click", () => {
  color = "rainbow";
});

btnsActiveList.forEach(btn => {
  btn.addEventListener("click", () => {
   btnsActiveList.forEach(otherBtn => {
    otherBtn.classList.remove("active");
    otherBtn.style.borderColor = "white";
    otherBtn.style.boxShadow = "none";
   });
   btn.classList.add("active");
   btn.style.borderColor = colorPick.value;
   btn.style.boxShadow = `0 0 20px ${colorPick.value}`;
  });
});


// Functions for DOM functions
function getRdmColor() {
    return "hsla(" + (Math.random() * 360) + ", 100%, 50%, 1)";
};

function updateActiveButtonBorderColor() {
  const activeButton = document.querySelector(".btns.active");
  if (activeButton) {
    activeButton.style.borderColor = colorPick.value;
    activeButton.style.boxShadow = `0 0 20px ${colorPick.value}`;
  }
};


// DOM on Load
colorBtn.classList.add("active");
colorBtn.style.borderColor = colorPick.value;
colorBtn.style.boxShadow = `0 0 20px ${colorPick.value}`;