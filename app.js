const CONTAINER_SIDE = 700; // px

// create (nrSquared x nrSquared) squares in the container.
function createSquares(nrSquared) {
    const container = document.getElementById("container");
    const squareSide = Math.floor(700 / nrSquared);

    for (let i = 0; i < nrSquared ** 2; ++i) {
        let square = document.createElement("div");
        square.style.border = "solid lightgray 1px";

        container.appendChild(square);
    }
}

createSquares(16);