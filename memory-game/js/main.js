const cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User fipped queen");

var cardTwo = cards[1];

cardsInPlay.push(cardTwo);

console.log("User flipped queen");

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You've found a match!");
} else {
  alert ("Sorry, try again.");
}
}
