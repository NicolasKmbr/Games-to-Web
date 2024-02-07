
/**
 * The function shuffles an array by randomly swapping elements.
 * @param array - The "array" parameter is an array of elements that you want to shuffle.
 * @returns the shuffled array.
 */
export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements at indices i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}