// Accessing  DOm Elements
let startGame = document.querySelector(".start-game");
let newGameBtn = document.querySelector('.new-game');
let cards = document.querySelectorAll(".single-card");
let title = document.querySelector("h1");

let moves = document.querySelector(".number-of-moves");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");

//Global Variables
let totalSeconds = 0; // timer before start of game
let classArray = [];// array to store class name of cards to check for matching 
let clickCount = 0; // number of moves counter
let correctMatches = 0;
let endOfTimer;
let stateVariable;


startGame.addEventListener('click', init);


//.............game initialization function...............//
function init() {
    endOfTimer = setInterval(setTime, 1000);
}


//..............Eventlistener for every Card....................//
cards.forEach(function (item) {
    item.addEventListener("click", function() {
        flipCard(item);
    })
});



//................flip cardds...........//
function flipCard(card) {
    
    card.children[1].classList.toggle("hidden");
    card.children[0].classList.toggle("hidden");
    classArray.push(card.className);
    // check for match if 2 cards flipped contniously
    if(classArray.length === 2){
        clickCount++;
        moves.children[0].innerHTML = clickCount;
        setTimeout(checkMatch, 300);
    }
   
}


// ...................Timer function..........................//
function setTime() {
    totalSeconds++;
    seconds.innerHTML = timerTextFormatting(totalSeconds%60);
    minutes.innerHTML = timerTextFormatting(parseInt(totalSeconds/60));
}

function timerTextFormatting(val) {
    let valString = val + ""; // covert the number to string to use string.Length method
    if(valString.length < 2){
        return "0" + valString;
    }
    else{
        return valString;
    }
}

// .....................Matching Check............................//
function checkMatch(){
    //check for array length and if 2 ,do comparision
    if(classArray.length === 2){
        //get-rid of the number attached to the class name  
        let firstClass = classArray[0].slice(0,classArray[0].length-1);
        let secondClass = classArray[1].slice(0,classArray[1].length-1);

        if(firstClass === secondClass){
            correctMatches++;
            if(correctMatches === 8){
                title.innerHTML = "WINNER WINNER!! Chicken Dinner!!";
                title.style.color = "red";
                clearInterval(endOfTimer);
                
            }
        }
        else{
            // // flip back cards
            // document.querySelector(classArray[0].children[0].classList.toggle("hidden"));
            //.this doesn't work cuz querselector returns the div but getElementByClassName return HTML collection
            //...with the value as the [0] element of the collection
            // document.querySelector(classArray[0].children[1].classList.toggle("hidden"));
            // debugger;
            let firstCard = document.getElementsByClassName(classArray[0]);
            let secondCard = document.getElementsByClassName(classArray[1]);
            firstCard[0].children[0].classList.toggle("hidden");
            firstCard[0].children[1].classList.toggle("hidden");

            secondCard[0].children[0].classList.toggle("hidden");
            secondCard[0].children[1].classList.toggle("hidden");
        }
        classArray.length = 0;
    }
    
}


// ...................NEW GAME BUTTON....................//
newGameBtn.addEventListener('click', newGame);
function newGame() {
    //end timer
    clearInterval(endOfTimer);
    
    // reset initial values
    clickCount = 0;
    totalSeconds = 0;
    seconds.innerHTML = 0;
    minutes.innerHTML = 0;

    // Update DOM with initial Values
    moves.children[0].innerHTML = clickCount;
    title.innerHTML = "The Matching Game";
    title.style.color = "Black";
    const cards = document.querySelectorAll(".single-card");
    cards.forEach(function(item) {
        item.children[1].classList.add("hidden");
        item.children[0].classList.remove("hidden");
    })
    
}
