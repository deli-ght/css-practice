
function random(number) {
    return Math.floor(Math.random() * number);
  }


function bgChange(e){
    const rndCol = `rgb(${random(255)},${random(255)},${random(255)})`;

    e.target.style.backgroundColor = rndCol;
}

let btns = document.querySelectorAll('div');

for (let i = 0 ; i < btns.length ; i++){
    btns[i].addEventListener('click', bgChange)
}