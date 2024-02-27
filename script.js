const customRange = document.querySelector("#customRange");
const rangeValue = document.querySelector("#rangeValue");
const drawWindow = document.querySelector("#drawWindow");
const gridToggle = document.querySelector("#gridToggle");
const colorToggle = document.querySelector("#colorToggle");
const rainbowToggle = document.querySelector("#rainbowToggle");
const eraserToggle = document.querySelector("#eraserToggle");
const colorPicker = document.querySelector("#colorPicker");
const clearBtn = document.querySelector("#clearBtn");

const startNumGridElements = 25;
const flexBasis = 100 / startNumGridElements;
const children = drawWindow.children;
const toggleModes = [colorToggle, rainbowToggle, eraserToggle];

customRange.addEventListener("input", handleRange);
gridToggle.addEventListener("change", handleGridToggle);
clearBtn.addEventListener("click", clearGrid);

toggleModes.forEach((toggle) =>
  toggle.addEventListener("change", handleModeToggle)
);

for (let i = 0; i < startNumGridElements; i++)
  for (j = 0; j < startNumGridElements; j++) {
    const newDiv = document.createElement("div");
    if (gridToggle.checked) newDiv.classList.add("grid-border");
    newDiv.classList.add("grid-element");

    newDiv.addEventListener("mouseover", fillGrid);
    newDiv.addEventListener("mousedown", fillGrid);
    drawWindow.appendChild(newDiv);
  }
for (let i = 0; i < children.length; i++) {
  children[i].style.flexBasis = flexBasis + "%";
}

function handleRange() {
  rangeValue.innerHTML = this.value + " X " + this.value;

  while (drawWindow.firstChild) drawWindow.removeChild(drawWindow.firstChild);

  for (let i = 0; i < this.value; i++)
    for (j = 0; j < this.value; j++) {
      const newDiv = document.createElement("div");
      if (gridToggle.checked) newDiv.classList.add("grid-border");
      newDiv.classList.add("grid-element");

      newDiv.addEventListener("mouseover", fillGrid);
      newDiv.addEventListener("mousedown", fillGrid);
      drawWindow.appendChild(newDiv);
    }

  const children = drawWindow.children;

  const flexBasis = 100 / this.value;

  for (let i = 0; i < children.length; i++) {
    children[i].style.flexBasis = flexBasis + "%";
  }
}

function handleGridToggle() {
  if (this.checked) {
    for (let i = 0; i < children.length; i++) {
      children[i].classList.add("grid-border");
    }
  } else {
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove("grid-border");
    }
  }
}

function handleModeToggle() {
  toggleModes.forEach((toggle) => {
    if (toggle.name !== this.name) toggle.checked = false;
  });
}

function fillGrid(event) {
  if (
    (event.type === "mouseover" && event.buttons !== 1) ||
    event.button === 1 ||
    event.button === 2
  )
    return;
  if (colorToggle.checked) {
    const color = colorPicker.value;
    event.target.style.backgroundColor = color;
  } else if (rainbowToggle.checked) {
    const color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
    event.target.style.backgroundColor = color;
  } else if (eraserToggle.checked) {
    event.target.style.backgroundColor = "white";
  }
}

function clearGrid() {
  for (let i = 0; i < children.length; i++) {
    children[i].style.backgroundColor = "white";
  }
}
