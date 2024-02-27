const numGridElements = 25;

const containerDiv = document.getElementById("containerDiv");

for (let i = 0; i < numGridElements; i++)
  for (j = 0; j < numGridElements; j++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("test-border");

    containerDiv.appendChild(newDiv);
  }

const children = containerDiv.children;

const flexBasis = 100 / numGridElements;

for (let i = 0; i < children.length; i++) {
  children[i].style.flexBasis = flexBasis + "%";
}

const customRange = document.querySelector("#customRange");
const rangeValue = document.querySelector("#rangeValue");

customRange.addEventListener("input", handleRange);

function handleRange() {
  rangeValue.innerHTML = customRange.value + " X " + customRange.value;

  while (containerDiv.firstChild)
    containerDiv.removeChild(containerDiv.firstChild);

  for (let i = 0; i < customRange.value; i++)
    for (j = 0; j < customRange.value; j++) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("test-border");

      containerDiv.appendChild(newDiv);
    }

  const children = containerDiv.children;

  const flexBasis = 100 / customRange.value;

  for (let i = 0; i < children.length; i++) {
    children[i].style.flexBasis = flexBasis + "%";
  }
}
