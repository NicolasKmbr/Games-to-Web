// Import the function to test
import { createCardDeck } from "@/utils/createCardDeck";


describe('createCardDeck', () => {
  it('Test if each card in the deck has a pair', () => {
    const deck = createCardDeck(2, { duplicate: true, includeMatchable: true });
    deck.every(card => {
      expect(deck.filter(c => c.rank === card.rank && c.suit === card.suit).length).toBe(2)
    });
  });
});
