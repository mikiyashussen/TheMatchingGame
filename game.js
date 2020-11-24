// access the card 
let firstCard = document.querySelector(".card-1-front");
let backCard = document.querySelector(".card-1-back")

firstCard.addEventListener('click', function() {
    firstCard.classList.add("hidden");
    backCard.classList.remove("hidden");

});

backCard.addEventListener('click', function() {
    backCard.classList.add("hidden");
    firstCard.classList.remove("hidden");

});



// flip when clicked