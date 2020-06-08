const GenerateUniqueID = require('../../src/utils/GenerateUniqueID');

describe('Generate an unique ID', () => {
    it('Should generate an unique ID', () => {
        expect(GenerateUniqueID()).toHaveLength(8);
    })
});

