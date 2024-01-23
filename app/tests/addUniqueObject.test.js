import { describe, it, expect } from 'vitest';
import { addUniqueObject } from '../utils/addUniqueObject';

describe('addUniqueObject', () => {
    it('should add a new unique object to the array', () => {
        const array = [{ rank: 'Ace', suit: 'Hearts' }];
        const newObj = { rank: 'King', suit: 'Spades' };

        addUniqueObject(newObj, array);

        expect(array).toContain(newObj);
    });

    it('should not add an object that already exists in the array', () => {
        const existingObj = { rank: 'Ace', suit: 'Hearts' };
        const array = [existingObj];

        addUniqueObject({ rank: 'Ace', suit: 'Hearts' }, array);

        expect(array).toHaveLength(1);
        expect(array).toContain(existingObj);
    });

    it('should handle adding to an empty array', () => {
        const array = [];
        const newObj = { rank: 'Queen', suit: 'Diamonds' };

        addUniqueObject(newObj, array);

        expect(array).toContain(newObj);
    });

    it('should not add a null or undefined object', () => {
        const array = [{ rank: 'Ace', suit: 'Hearts' }];

        addUniqueObject(null, array);
        addUniqueObject(undefined, array);

        expect(array).toHaveLength(1);
    });
});
