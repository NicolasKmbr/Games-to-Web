
// Function to select a random string from the array
export function getRandomSuit() {
    const suits = ["clubs", "hearts", "diamonds", "spades"];
  const randomIndex = Math.floor(Math.random() * suits.length);
  return suits[randomIndex];
}