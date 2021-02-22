//alert('Game On!')

if (confirm('Start New Game?')){
    document.getElementById("status").innerHTML = "Game of Trash Begins";
}
else
{
    document.getElementById("status").innerHTML = "See Ya Next Time! Bye.";
}
function startGame(){
    alert('Player 1\'s turn');
}