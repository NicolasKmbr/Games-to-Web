import { createCard } from "@/utils/CreateCard";
import { getRandomSuit } from "@/utils/getRandomSuit";
import { getRandomCardRank } from "@/utils/getRandomCardRank";

/**
 * The function creates a deck of cards with a specified amount and option to duplicate the deck.
 * @param amountOfCards - The number of cards you want to create in the deck.
 * @param duplicate - The `duplicate` parameter is a boolean value that determines whether the card
 * deck should contain duplicate cards or not. If `duplicate` is `true`, the card deck will contain two
 * copies of each card. If `duplicate` is `false`, the card deck will only contain one copy of each
 * card
 * @returns The function `createCardDeck` returns an array of card objects. If the `duplicate`
 * parameter is `true`, the function returns a deck with duplicate cards, otherwise it returns a deck
 * without duplicates.
 */
export function createCardDeck(amountOfCards, duplicate) {
    const cardDeck = [];
    while (cardDeck.length < amountOfCards) {
        const suit = getRandomSuit();
        const rank = getRandomCardRank();
        const newCard = createCard(rank, suit);
        cardDeck.push(newCard);
    }
    if (duplicate) {
        return cardDeck.concat(cardDeck);
    }
    return cardDeck;
}
