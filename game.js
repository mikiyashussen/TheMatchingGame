

let cards = document.querySelectorAll(".single-card");
let classArray = [];// array to check matching cards
function flipCard(card) {

    // console.log(card);
    classArray.push(card.className);
    card.children[1].classList.toggle("hidden");
    card.children[0].classList.toggle("hidden");

    // check for match if 2 cards flipped contniously
    if(classArray.length === 2){
        let timer = setTimeout(checkMatch, 2000);
        
    }
    // chekcMatch();

    
}


// ...........Matching Check..........
function checkMatch(){
    //check for array length and if 2 ,do comparision
    if(classArray.length === 2){
        //get-tid of the class number
        let firstClass = classArray[0].slice((classArray[0].length-1));
        let secondClass = classArray[0].slice((classArray[1].length-1));

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
    let clickCount = 0;
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
