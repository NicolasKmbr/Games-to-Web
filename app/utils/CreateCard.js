/**
 * The function creates a card object with a rank, suit, and optional imagePath, and can include a
 * matchable property if specified.
 * @param rank - The rank parameter represents the rank or value of the card. It can be any value from
 * 2 to 10, or one of the following strings: "ace", "jack", "queen", or "king".
 * @param suit - The `suit` parameter represents the suit of the card, such as "hearts", "diamonds",
 * "clubs", or "spades".
 * @param [options] - The `options` parameter is an object that allows for additional customization
 * when creating a card.
 * @returns an object with the properties `rank`, `suit`, `imagePath`, and `matched` (if
 * `includeMatchable` is true).
 */
export function createCard(rank, suit, options = {}) {

    const { includeMatchable = false } = options;
    
    return {
        rank: rank,
        suit: suit,
        imagePath: `/Deck_of_Cards/${rank}_of_${suit}.png`,
        ...(includeMatchable && { matched: false }), 
    };
}
