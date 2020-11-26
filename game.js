
//.............Eventlistener for every Card.........
let cards = document.querySelectorAll(".single-card");
let classArray = [];
function flipCard(card) {

    console.log(card);
    classArray.push(card.className);
    card.children[1].classList.toggle("hidden");
    card.children[0].classList.toggle("hidden");

    // check for array length and if 2 ,do comparision
    if(classArray.length === 2){
        if(classArray[0] === classArray[1]){
            console.log("cards Equal");
            // count score
        }
        else{
            console.log("cards not Equal");
            // flip back cards
            
        }
        classArray.length = 0;
    }
}
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
