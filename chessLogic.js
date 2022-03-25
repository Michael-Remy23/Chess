const pawn1 = document.querySelector("#tile49");

/*legal move variable
pawn can go up 2 tiles from its starting one
*/

function pawnMove1(){
    document.getElementById("tile33"/*put "+"" and the number of the tile that gets clicked on*/).innerHTML = "♟"
    document.getElementById("tile49").innerHTML = ""
}

function pawnMove2(){
    document.getElementById("tile18").innerHTML = "♙"
    document.getElementById("tile10").innerHTML = ""
}

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

