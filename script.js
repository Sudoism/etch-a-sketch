

//fist iteration; function creating divs
//second iteration, function that takes dimensions and creates divs

const sketchpad = document.querySelector(".sketchpad");

// enables gridlike divs on HTML for the etchpad
function createGrid(numberOfColumns, numberOfRows){

    for (let i = 0; i < numberOfColumns; i++) {
        const newColumn = document.createElement('div');
        newColumn.setAttribute("class","column");
        sketchpad.appendChild(newColumn);

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

const setupButton = document.querySelector(".setup");

setupButton.addEventListener("click", function(){

    let dimensions = prompt("Enter grid dimensions. 10 will create a 10x10 grid");

    if(dimensions>100){
        dimensions = 100;
        alert("grid dimension max is 100x100")
    }
    const parent = document.querySelector(".sketchpad");
    while (parent.firstChild) {
        parent.firstChild.remove()
    }

    createGrid(dimensions, dimensions);
});

createGrid(10,10);