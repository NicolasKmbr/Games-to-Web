function createCard(rank, suit) {
    return {
        rank: rank,
        suit: suit,
        imagePath: `assets/${rank}_of_${suit}.png`
    };
}
