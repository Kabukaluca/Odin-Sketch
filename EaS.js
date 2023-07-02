const sketchCont = document.getElementById("sketch-container");
const input = document.querySelector("#slider");
const gridSizeSpan = document.querySelector(".gridSize");

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
    }
  sketchCont.appendChild(divCol);
    }
}
createDivs();

// DOM functions
input.addEventListener("input", () => {
    gridSizeSpan.textContent = input.value;
});
input.addEventListener("input", createDivs);