// Define an array of symbols for the cards
const symbols = ['♠', '♣', '♥', '♦', '♛', '♞', '♨', '⚓'];

// Duplicate the symbols to form pairs
const cards = symbols.concat(symbols);

// Shuffle the cards randomly
cards.sort(() => Math.random() - 0.5);

const gameBoard = document.getElementById('game-board');
let flippedCards = [];
let matchedCards = [];

// Create the card elements and add event listeners
cards.forEach((symbol, index) => {
  const card = document.createElement('div');
  card.className = 'card card-' + (index % 4 + 1);
  card.setAttribute('data-index', index);
  card.addEventListener('click', flipCard);
  gameBoard.appendChild(card);
});

// Function to handle card flipping
function flipCard(event) {
  const card = event.target;
  const index = card.getAttribute('data-index');

  // Prevent flipping already matched cards
  if (matchedCards.includes(index)) {
    return;
  }

  // Add flipped card to the array
  flippedCards.push(index);

  // Update the card's appearance
  card.textContent = cards[index];
  card.style.backgroundColor = '#fff';

  // Check for a match
  if (flippedCards.length === 2) {
    const card1Index = flippedCards[0];
    const card2Index = flippedCards[1];

    // Match found
    if (cards[card1Index] === cards[card2Index]) {
      matchedCards.push(card1Index, card2Index);
      flippedCards = [];

      // Check if all cards are matched
      if (matchedCards.length === cards.length) {
        setTimeout(() => {
          alert('Congratulations! You won!');
          resetGame();
        }, 500);
      }
    } else {
      // No match, flip the cards back after a short delay
      setTimeout(() => {
        const card1 = document.querySelector(`[data-index="${card1Index}"]`);
        const card2 = document.querySelector(`[data-index="${card2Index}"]`);
        card1.textContent = '';
        card1.style.backgroundColor = '#fff';
        card2.textContent = '';
        card2.style.backgroundColor = '#fff';
        flippedCards = [];
      }, 1000);
    }
  }
}

// Function to reset the game
function resetGame() {
  gameBoard.innerHTML = '';
  cards.sort(() => Math.random() - 0.5);
  matchedCards = [];
  flippedCards = [];
  cards.forEach((symbol, index) => {
    const card = document.createElement('div');
    card.className = 'card card-' + (index % 4 + 1);
    card.setAttribute('data-index', index);
    card.addEventListener('click', flipCard);
    gameBoard.appendChild(card);
  });
}
