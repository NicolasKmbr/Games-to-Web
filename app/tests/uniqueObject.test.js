const { addUniqueObject } = require('../utils/addUniqueObject');

describe('addUniqueObject', () => {
    test('adds a unique object to an empty array', () => {
        const array = [];
        const newObj = { rank: 'Ace', suit: 'Hearts' };
        addUniqueObject(newObj, array);
        expect(array).toContain(newObj);
    });

    test('adds a unique object to a non-empty array', () => {
        const array = [{ rank: 'King', suit: 'Spades' }];
        const newObj = { rank: 'Queen', suit: 'Hearts' };
        addUniqueObject(newObj, array);
        expect(array).toContain(newObj);
    });

    test('does not add a duplicate object', () => {
        const array = [{ rank: 'Ace', suit: 'Hearts' }];
        const newObj = { rank: 'Ace', suit: 'Hearts' };
        addUniqueObject(newObj, array);
        expect(array).toHaveLength(1);
    });

    test('adds an object with some matching attributes', () => {
        const array = [{ rank: 'Ace', suit: 'Hearts' }];
        const newObj = { rank: 'Ace', suit: 'Diamonds' };
        addUniqueObject(newObj, array);
        expect(array).toHaveLength(2);
    });
});