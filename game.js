let clickCount = 0;

let moves = document.querySelector(".number-of-moves");

let cards = document.querySelectorAll(".single-card");
let classArray = [];// array to check matching cards
function flipCard(card) {

    // console.log(card);
    classArray.push(card.className);
    card.children[1].classList.toggle("hidden");
    card.children[0].classList.toggle("hidden");

    // check for match if 2 cards flipped contniously
    if(classArray.length === 2){
        clickCount++;
        moves.children[0].innerHTML = clickCount;
        setTimeout(checkMatch, 300);
    }
    // chekcMatch();

    
}

// ............... Start Game..........
let startGame = document.querySelector(".start-game");
startGame.addEventListener('click', init);



// ......timer function.........
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let totalSeconds = 0;
function init() {
    setInterval(setTime, 1000);
}

function setTime() {
    totalSeconds++;
    seconds.innerHTML = pad(totalSeconds%60);
    minutes.innerHTML = pad(parseInt(totalSeconds/60));
}

function pad(val) {
    let valString = val + "";
    if(valString.length < 2){
        return "0" + valString;
    }
    else{
        return valString;
    }
}

// ...........Matching Check..........
function checkMatch(){
    //check for array length and if 2 ,do comparision
    if(classArray.length === 2){
        //get-tid of the class number   
        let firstClass = classArray[0].slice(0,classArray[0].length-1);
        let secondClass = classArray[1].slice(0,classArray[1].length-1);

        if(firstClass === secondClass){
            console.log("cards Equal");
            // count score
        }
        else{
            console.log("cards not Equal");
            // // flip back cards
            // document.querySelector(classArray[0].children[0].classList.toggle("hidden"));
            // document.querySelector(classArray[0].children[1].classList.toggle("hidden"));
            // let x = classArray[0]
            // debugger;
            let first = document.getElementsByClassName(classArray[0]);
            let second = document.getElementsByClassName(classArray[1]);
            first[0].children[0].classList.toggle("hidden");
            first[0].children[1].classList.toggle("hidden");

            second[0].children[0].classList.toggle("hidden");
            second[0].children[1].classList.toggle("hidden");

            // document.querySelector(classArray[1].children[0].classList.toggle("hidden"));
            // document.querySelector(classArray[1].children[1].classList.toggle("hidden"));
        }
        classArray.length = 0;
    }
    
}


////.............Eventlistener for every Card.........
cards.forEach(function (item) {
    
    item.addEventListener("click", function() {
        // debugger;
        // console.log(item);
        flipCard(item);
    })
});






// ...................NEW GAME BUTTON....................//
let newGameBtn = document.querySelector('.new-game');

newGameBtn.addEventListener('click', newGame);

function newGame() {
let cards = document.querySelectorAll(".single-card");
    
    // debugger;
    cards.forEach(function(item) {
        item.children[1].classList.add("hidden");
        item.children[0].classList.remove("hidden");
    })
}

// const cards = document.querySelectorAll(".single-card");

// function flipCard() {
//     debugger;
//   this.classList.toggle("hidden");
// }
// cards.forEach((card) => card.addEventListener("click", flipCard))
