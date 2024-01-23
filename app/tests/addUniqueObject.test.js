import { describe, it, expect } from 'vitest';
import { addUniqueObject } from '../utils/addUniqueObject';

describe('addUniqueObject', () => {
    it('should add a new unique object to the array', () => {
        const array = [{ rank: 'ace', suit: 'hearts' }];
        const newObj = { rank: 'king', suit: 'spades' };

        addUniqueObject(newObj, array);

        expect(array).toContain(newObj);
    });

    it('should not add an object that already exists in the array', () => {
        const existingObj = { rank: 'ace', suit: 'hearts' };
        const array = [existingObj];

        addUniqueObject({ rank: 'ace', suit: 'hearts' }, array);

        expect(array).toHaveLength(1);
        expect(array).toContain(existingObj);
    });

    it('should handle adding to an empty array', () => {
        const array = [];
        const newObj = { rank: 'queen', suit: 'diamonds' };

        addUniqueObject(newObj, array);

        expect(array).toContain(newObj);
    });

    it('should not add a null or undefined object', () => {
        const array = [{ rank: 'ace', suit: 'hearts' }];

        addUniqueObject(null, array);
        addUniqueObject(undefined, array);

        expect(array).toHaveLength(1);
    });
});
