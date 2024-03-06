const CONTAINER_SIDE_LENGTH = 700; // px
const CONTAINER = document.getElementById("container");
const SQUARES_LIMIT = 100;

// create (nrSquared x nrSquared) squares in the container.
function createSquares(nrSquared) {
    const squareWidth = Math.floor(CONTAINER_SIDE_LENGTH / nrSquared);

    for (let i = 0; i < nrSquared ** 2; ++i) {
        let square = document.createElement("div");
        square.style.minWidth = `${squareWidth}px`;

        CONTAINER.appendChild(square);
    }
}

CONTAINER.addEventListener("mouseover", (event) => {
    const target = event.target;

    if (target.id !== "container") // if target is one of the squares
        target.className = "inked-square";
});

const button = document.getElementById("buttonNew");
button.addEventListener("click", () => {
    let squaresPerSide = parseInt(
        prompt(`Number of squares per side (max. ${SQUARES_LIMIT}): `)
    );

    if (squaresPerSide > SQUARES_LIMIT) {
        squaresPerSide = SQUARES_LIMIT;
    }

    clearContainer();
    createSquares(squaresPerSide);
})

function clearContainer() {
    while (CONTAINER.lastElementChild) {
        CONTAINER.removeChild(CONTAINER.lastElementChild);
    }
}

createSquares(16);