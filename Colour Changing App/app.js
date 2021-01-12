let colours = [ 'blue', 'red', 'black', 'purple', 'green', 'yellow'];


// this activates when button is clicked
let button = document.getElementById('button');

button.addEventListener('click', function(){
    //c randomly picks from list from colours 0 -6
    let index = parseInt((Math.random()*colours.length)+1);
    // fetches canvas
    let canvas = document.getElementById('canvas');

    canvas.style.background = `${colours[index]}`
})