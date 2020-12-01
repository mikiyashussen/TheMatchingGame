
let startGame = document.querySelector(".start-game");
let newGameBtn = document.querySelector('.new-game');
let cards = document.querySelectorAll(".single-card");
let title = document.querySelector("h1");

let moves = document.querySelector(".number-of-moves");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");

let totalSeconds = 0; // timer before start of game
let classArray = [];// array to store class name of cards to check for matching 
let clickCount = 0; // number of moves counter
let correctMatches = 0;


startGame.addEventListener('click', init);


//.............game initialization function...............//
function init() {
    setInterval(setTime, 1000);
    // if 8 matches display winner and stop timer
}


//..............Eventlistener for every Card....................//
cards.forEach(function (item) {
    item.addEventListener("click", function() {
        flipCard(item);
    })
});




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
    // chekcMatch();
}





// ....................timer function..........................//
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
                winner();
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

//............Winner FUnction..............//
function winner() {
    title.innerHTML = "WINNER WINNER!! Chicken Dinner!!";
    title.style.color = "red";
}
// ...................NEW GAME BUTTON....................//
newGameBtn.addEventListener('click', newGame);

function newGame() {
    let cards = document.querySelectorAll(".single-card");
    cards.forEach(function(item) {
        item.children[1].classList.add("hidden");
        item.children[0].classList.remove("hidden");
    })

    // conut back to zero
    clickCount = 0;
    moves.children[0].innerHTML = clickCount;
    totalSeconds = 0;
}
