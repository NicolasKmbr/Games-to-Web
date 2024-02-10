import { createCard } from "@/utils/CreateCard";
import { getRandomSuit } from "@/utils/getRandomSuit";
import { getRandomCardRank } from "@/utils/getRandomCardRank";
import { shuffleArray } from "@/utils/shuffleAray";

/**
 * The function creates a deck of cards with a specified amount, with an option to include duplicates
 * and matchable cards.
 * @param amountOfCards - The `amountOfCards` parameter specifies the number of cards that should be in
 * the deck.
 * @param [options] - The `options` parameter is an object that allows you to customize the behavior of
 * the `createCardDeck` function. It has two properties:
 * - `duplicate` - The `duplicate` property is a boolean that specifies whether the deck should contain
 * duplicate cards. If true, the deck will contain two of each card.
 * - `includeMatchable` - The `includeMatchable` property is a boolean that specifies whether the cards
 * should have a `matched` property. If true, the `matched` property will be included in the card
 * @returns a card deck, which is an array of card objects.
 */
export function createCardDeck(amountOfCards, options = {}) {
  const { duplicate, includeMatchable = false } = options;

  const cardDeck = [];
  while (cardDeck.length < amountOfCards) {
    const suit = getRandomSuit();
    const rank = getRandomCardRank();
    const newCard = createCard(rank, suit, { includeMatchable });
    // Check if card is already in the deck
    if (
      cardDeck.some(
        (card) => card.rank === newCard.rank && card.suit === newCard.suit
      )
    ) {
      continue;
    }

    cardDeck.push(newCard);
  }
  if (duplicate) {
    return shuffleArray(cardDeck.concat(cardDeck));
  }
  return shuffleArray(cardDeck);
}
