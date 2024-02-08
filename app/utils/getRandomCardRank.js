// Define the array of card ranks
const cardRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

// Function to get a random card rank
export function getRandomCardRank() {
    const randomIndex = Math.floor(Math.random() * cardRanks.length);
    return cardRanks[randomIndex];
}