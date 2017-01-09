require('should');
const {
  selectionSort,
  bubbleSort,
} = require('../src/chapter3');

describe('chapter3', () => {
  [selectionSort, bubbleSort].forEach(sort => {
    describe(sort.name, () => {
      it('non-array should throw', () => {
        sort.should.throw();
      });

      it('empty array should be ok', () => {
        sort([]).should.eql([]);
      });

      it('single element array should be ok', () => {
        sort([1]).should.eql([1]);
        sort([666]).should.eql([666]);
      });

      it('big array should be ok', () => {
        const originalArray = [89, 45, 68, 90, 29, 34, 17];
        const sortedArray = [17, 29, 34, 45, 68, 89, 90];
        sort(originalArray).should.eql(sortedArray);
      });
    });
  });
});
