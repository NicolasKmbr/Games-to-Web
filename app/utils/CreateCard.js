export function createCard(rank, suit) {
    return {
        rank: rank,
        suit: suit,
        imagePath: `/Deck_of_Cards/${rank}_of_${suit}.png`,
        matched: false
    };
}
