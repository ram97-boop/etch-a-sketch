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

// const button = document.getElementsById("buttonNew");
// button.addEventListener("clicked", () => {
//     const squaresPerSide = parseInt(prompt("Number of squares per side: "));

//     createSquares(squaresPerSide);
// })

createSquares(16);