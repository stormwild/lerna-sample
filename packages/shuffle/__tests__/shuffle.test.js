'use strict';

const shuffle = require('../lib/shuffle');

describe('shuffle', () => {
    it('returns an array of the same length', () => {
        // Arrange
        const data = [1, 2, 3, 4];
        // Act
        const result = shuffle(data)

        // Assert
        assert(data.length === result.length)
    });
});
