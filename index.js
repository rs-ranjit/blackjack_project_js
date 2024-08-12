//create 2 variables , the sum of the two variable will decide if it is blackJack i.e. 21 is black jack
//use if condition to check if the values of the variable make the player lose, win, or has the opportunity to draw one more card
//make a variable isAlive and hasBlackJack which will have  true and false, resp. whose values will change with the check done by if statement
//make a varible message that sends message
let cards = [];
let sum = 0;
let isAlive = false;
let message = ''
let hasBlackJack = false;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let player = {
    playerName : "Rahul",
    playerChips: 100
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.playerName + ": $" + player.playerChips;

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function getRandomCard(){
   let result =  Math.floor(Math.random()*13) + 1;
    if(result ===  1){
        return 11;
    }else if(result === 11 || result === 12 || result === 13) {
        return 10;
    }else{
        return result;
    }
        
}

function renderGame(){
    cardEl.textContent = "Cards: " 
    for(i=0;i<cards.length;i++){
        cardEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;

if(sum < 21){
    message = 'Would you like to draw once more?';
}
else if(sum === 21){
    message = 'You have a black jack';
    hasBlackJack = true;
}
else{
    message = 'You have lost the game';
    isAlive = false;
}

messageEl.textContent = message;
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }else{
        messageEl.textContent = 'You have lost the game';
    }

}