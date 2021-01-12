let button = document.getElementById('btn');

button.addEventListener('click', function(){
    let words = document.getElementById('str').nodeValue;
    let count = words.length;
    let outputTotal = document.getElementById('output');

    outputTotal.innerHTML = `<h1>${count}</h1>`
});