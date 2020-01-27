let cards = [
{
rank:"queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank:"queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank:"king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank:"king",
suit: "hearts",
cardImage: "images/king-of-diamonds.png"
}
]
let cardsInPlay = [];
let score = 0;

function flipCard() {
	let cardId = this.getAttribute('id');
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

function checkForMatch () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match");
		score ++;
		document.getElementById("score").textContent = "You've Found " + score + " Matches!";
	} else {
		alert("Sorry, try again");
	}
}

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('id', i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

createBoard();

function reset() {
 	for (let i = 0; i < cards.length; i++) {
 		let cardElement = document.getElementById(i);
 		cardElement.setAttribute('src', "images/back.png");
 	}
 	cardsInPlay = [];
}

document.getElementById('reset').addEventListener('click', reset);