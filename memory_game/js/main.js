let cards = [
{
rank:"queen",
suit: "hearts",
cardImage: "image/queen-of-hearts.jpg"
},
{
rank:"queen",
suit: "diamonds",
cardImage: "image/queen-of-diamonds.jpg"
},
{
rank:"king",
suit: "hearts",
cardImage: "image/king-of-hearts.jpg"
},
{
rank:"king",
suit: "hearts",
cardImage: "image/king-of-diamonds.jpg"
}
]
let cardsInPlay = [];

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log("The suit: " + cards[cardId].suit);
	console.log("The image: " + cards[cardId].cardImage);
};

function checkForMatch () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match");
	} else {
		alert("Sorry, try again");
	}
}

flipCard(0);
flipCard(2);
checkForMatch();