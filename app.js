const CONTAINER_SIDE_LENGTH = 700; // px
const CONTAINER = document.getElementById("container");
const SQUARES_LIMIT = 100;
const STARTING_SQUARES = 16;

// create (nrSquared x nrSquared) squares in the container.
function createSquares(nrSquared) {
    const squareWidth = Math.floor(CONTAINER_SIDE_LENGTH / nrSquared);

    for (let i = 0; i < nrSquared ** 2; ++i) {
        let square = document.createElement("div");
        square.style.minWidth = `${squareWidth}px`;

        CONTAINER.appendChild(square);
    }
}

function clearContainer() {
    while (CONTAINER.lastElementChild) {
        CONTAINER.removeChild(CONTAINER.lastElementChild);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

CONTAINER.addEventListener("mouseover", (event) => {
    const target = event.target;
    let style = target.style;

    // i.e. if target is one of the squares, and hasn't been colored yet.
    if (target.id !== "container" && style.backgroundColor === "") {

        let red = getRandomInt(256); // random number between 0-255
        let green = getRandomInt(256);
        let blue = getRandomInt(256);

        style.backgroundColor = `rgb(${red} ${green} ${blue})`;
    }

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

createSquares(STARTING_SQUARES);