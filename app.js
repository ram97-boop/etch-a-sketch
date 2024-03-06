const CONTAINER_SIDE = 700; // px

// create (nrSquared x nrSquared) squares in the container.
function createSquares(nrSquared) {
    const container = document.getElementById("container");
    const squareWidth = Math.floor(700 / nrSquared);

    for (let i = 0; i < nrSquared ** 2; ++i) {
        let square = document.createElement("div");
        square.style.minWidth = `${squareWidth}px`;

        container.appendChild(square);
    }
}

const container = document.getElementById("container");
container.addEventListener("mouseover", (event) => {
    const target = event.target;

    if (target.id !== "container") // if target is one of the squares
        target.className = "inked-square";
});

const button = document.getElementById("buttonNew");
button.addEventListener("click", () => {
    let squaresPerSide = parseInt(
        prompt("Number of squares per side (max. 100): ")
    );

    if (squaresPerSide > 100) {
        squaresPerSide = 100;
    }

    clearContainer(document.getElementById("container"));
    createSquares(squaresPerSide);
})

function clearContainer(container) {
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
}

createSquares(16);