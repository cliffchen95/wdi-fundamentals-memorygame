let cards = ["queen", "queen", "king", "king"]
let cardsInPlay = [];

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
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