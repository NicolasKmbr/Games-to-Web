import { createCard } from "@/utils/CreateCard";
import { getRandomSuit } from "@/utils/getRandomSuit";
import { getRandomCardRank } from "@/utils/getRandomCardRank";

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
