

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
            const newBox = document.createElement('div');
            newBox.setAttribute("class","box");
            newBox.addEventListener("mouseenter", function(e){
                e.target.className= "touched box";
            });
            newColumn.appendChild(newBox);
        }
    }
}

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", function(){
    let touched = document.getElementsByClassName("box");
    for(let i =0; i<touched.length; i++){
        touched[i].className = "box";
    }
});

createGrid(5,5);