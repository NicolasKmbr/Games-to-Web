function createCard(rank, suit) {
    return {
        rank: rank,
        suit: suit,
        imagePath: `public/Deck_of_Cards/${rank}_of_${suit}.png`
    };
}
