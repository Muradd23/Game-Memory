//Initialization
let revealedCards = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let moves = 0;
let success = 0;
let time = false;
let timer = 0;

let rightaudio = new Audio('./sounds/w3.mp3');
let wrongaudio =new Audio('./sounds/wrong3.mp3');
let win =new Audio('./sounds/w1.mp3');

let showMoves = document.getElementById('Moves');
let showSuccess = document.getElementById('Success'); 
let showTime = document.getElementById('Time less');

let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numbers = numbers.sort(()=>{return Math.random()-0.5});
console.log(numbers);

//function time
function countTime(){
    timer++;
    showTime.innerHTML = `Time: ${timer} sec`;
}

//funcion principal
function reveal(id){
if(time == false){
    time = true;
    intervalId=setInterval(countTime,1000);
}

    revealedCards++;
    console.log(revealedCards);
    //Show first number
    if(revealedCards == 1){
        card1 = document.getElementById(id);
        firstResult= numbers[id]
        card1.innerHTML = `<img src="./images/${firstResult}.png" alt="">`;
        //disable button
        card1.disabled = true;
    //Show second card
    }else if(revealedCards == 2){
        card2 = document.getElementById(id);
        secondResult = numbers[id];
        card2.innerHTML = `<img src="./images/${secondResult}.png" alt="">`;;
        //disable button
        card2.disabled = true;
        //increase moves
        moves++;
        showMoves.innerHTML = `Moves: ${moves}`;

        if(firstResult==secondResult){
            revealedCards =0;
            //Show success
            success++;
            showSuccess.innerHTML = `Success: ${success}`;
            rightaudio.play();
            if(success==8){
                clearInterval(intervalId);
                showSuccess.innerHTML =`Total Correct Guesses: ${success}`;
                showMoves.innerHTML =`Total moves to win: ${moves}`
                showTime.innerHTML = `Time to win: ${timer}`;
                win.play();
            }
        }else{
            //Show and hide
            setTimeout(()=>{
                card1.innerHTML = ' ';
                card2.innerHTML = ' ';
                card1.disabled = false;
                card2.disabled = false;
                revealedCards = 0;
            },500);
        }
    }
    

}

