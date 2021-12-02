

//fist iteration; function creating divs
//second iteration, function that takes dimensions and creates divs

const container = document.querySelector(".container");

// enables gridlike divs on HTML for the etchpad
function createGrid(numberOfColumns, numberOfRows){

    for (let i = 0; i < numberOfColumns; i++) {
        const newColumn = document.createElement('div');
        newColumn.setAttribute("class","column");
        container.appendChild(newColumn);

        for (let i = 0; i < numberOfRows; i++) {
            const newRow = document.createElement('div');
            newRow.setAttribute("class","box");
            newColumn.appendChild(newRow);
        }
    }
}

createGrid(10,5);