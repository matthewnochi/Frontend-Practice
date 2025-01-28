const container = document.querySelector(".container");
const button = document.querySelector(".button");
button.onclick = newSize;
genGrid();

function newSize() {
    let next = prompt("Enter the grid size (Between 1 - 100)");
    next = parseInt(next);
    if (isNaN(next) || next > 100 || next < 1) {
        alert("Invalid number, defaulting to size 16");
        next = 16;
    } 

    const entire = document.querySelectorAll(".grid");
    entire.forEach(function(child) {
        child.remove();
    });
    genGrid(next);
}

function genGrid(size = 16) {
    for (let i = 0; i < size * size; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);
        grid.style.height = (600/size) + "px";
        grid.style.width = (600/size) + "px";
        grid.onmouseenter = function() {
            grid.style.backgroundColor = newColor();
        };
    }
}

function newColor() {
    const num = Math.floor(Math.random() * 16777216);
    const color = num.toString(16).padStart(6, '0');
    color.toUpperCase();
    return "#" + color;
}