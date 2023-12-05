
const display= document.getElementById('Display');


let guess= document.getElementById('Guess');

const start=document.getElementById('s-btn');

const game= document.getElementById('g-btn');

const restart= document.getElementById('r-btn');

function startGame(){
    game.style.visibility='visible';
    start.style.display='none';
    display.innerHTML= 'Guess a number between 1 and 100';
    guess.style.display='initial';
    restart.style.visibility='visible';
    guess.value='';
}


let minVal=0;
let maxVal=100;
const random= Math.round(Math.random()*(maxVal-minVal+1) +minVal);
console.log(random);


function gamePlay(){
    const input= Number(guess.value);
    display.style.fontSize='1.5rem';
    while(true){
        if(input===random){
            display.innerHTML= `You Guessed it Right, It was  ${random} <br>&#128079; &#128079; &#128079; `;
            break;
        } else if(input>random){
            display.innerHTML=`Too High, Guess less than ${input}`;
            break;
        } else if(input<random){
            display.innerHTML=`Too Low, Guess higher than ${input}`;
            break;
        } else {
            display.innerHTML= 'Invalid Input';
            break;
        }
    }
}

function restartGame(){
    window.location.reload();
    guess.value='';
}