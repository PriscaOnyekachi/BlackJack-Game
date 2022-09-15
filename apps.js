const firstCard = 10;
const secondCard = 4;
let Cards = [firstCard,secondCard];
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = ""


let messageEl = document.querySelector('#message-el');
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");

function startGame() {
    renderGame()
}

function renderGame(){

    cardEl.textContent = "Cards: " + Cards[0] + " " + Cards[1]
    sumEl.textContent = "Sum: " + sum
    if(sum <= 20){
        message = "Do you want to draw a new Card?"
    }
    
    else if(sum === 21){
       message = "Wohoo! you've got Blackjack!"
        hasBlackjack = true
    }
    
    else{
        message = "you're out of the game"
        isAlive = false
    }
    messageEl.textContent = message;
}

function newCard(){
    console.log("Drawing a new card from the deck!")
    let card = 6;
    sum += card
    renderGame()
}

