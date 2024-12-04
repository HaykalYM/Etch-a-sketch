document.addEventListener("DomContentLoaded",function(){
 createBoard(16) 

})

function createBoard(size){
    let board = document.querySelector(".board")
   
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}