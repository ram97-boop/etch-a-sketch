const CONTAINER_SIDE = 700; // px

// create (nrSquared x nrSquared) squares in the container.
function createSquares(nrSquared) {
    const container = document.getElementById("container");
    const squareSide = Math.floor(700 / nrSquared);

    for (let i = 0; i < nrSquared ** 2; ++i) {
        let square = document.createElement("div");
        square.style.width = `${squareSide - 2}px`;
        square.style.height = `${squareSide - 2}px`;
        square.style.border = "solid black 1px";

        container.appendChild(square);
    }
}

createSquares(16);