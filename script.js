

//fist iteration; function creating divs
//second iteration, function that takes dimensions and creates divs

const container = document.querySelector(".container");

// enables gridlike divs on HTML for the etchpad
function createGrid(numberOfRows, numberOfColumns){

    for (let i = 0; i < numberOfRows; i++) {
        const newRow = document.createElement('div');
        newRow.setAttribute("class","box row");
        container.appendChild(newRow);

        for (let i = 0; i < numberOfColumns; i++) {
            const newColumn = document.createElement('div');
            newColumn.setAttribute("class","box column");
            newRow.appendChild(newColumn);
        }
    }
}

createGrid(5,2);