// Import the function to test
import { createCardDeck } from "@/utils/createCardDeck";


describe('createCardDeck', () => {
  it('Test if each card in the deck has only one pair', () => {
    const deck = createCardDeck(30, { duplicate: true, includeMatchable: true });

    // Use a Set to track logged card identifiers to avoid duplicate logging
    const loggedCards = new Set();

    deck.every(card => {
      const identifier = `${card.rank}-${card.suit}`;
      const matchingCards = deck.filter(c => c.rank === card.rank && c.suit === card.suit);

      if (matchingCards.length === 2 && !loggedCards.has(identifier)) {
        // Log the card and its pair
        console.log(`Pair found: ${identifier}`);
        loggedCards.add(identifier); // Mark this card as logged
        console.log(matchingCards);
      }

      expect(matchingCards.length).toBe(2);
      return true; // Return true to continue the .every iteration
    });
  });
});

