require('should');
const {
  selectionSort,
  bubbleSort,
  sequentialSearch,
  bruteForceStringMatch,
} = require('../src/chapter3');

describe('chapter3', () => {
  // sort
  [selectionSort, bubbleSort].forEach(sort => {
    describe(sort.name, () => {
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
        sort(sortedArray).should.eql(sortedArray);
      });
    });
  });

  describe('sequentialSearch', () => {
    it('key in the array should be ok', () => {
      sequentialSearch([1], 1).should.equal(0);
      sequentialSearch([0, 1, 3, 4], 4).should.equal(3);
    });

    it('key not in array should return -1', () => {
      sequentialSearch([], 0).should.equal(-1);
      sequentialSearch([1, 2, 34], 3).should.equal(-1);
    });
  });

  describe('bruteForceStringMatch', () => {
    it('not match should return -1', () => {
      bruteForceStringMatch('abcd', 'ff').should.equal(-1);
      bruteForceStringMatch('', 'aaaa').should.equal(-1);
      bruteForceStringMatch('ahahaha', '').should.equal(-1);
    });

    it('match should return the start pos', () => {
      bruteForceStringMatch('hahaha', 'hah').should.equal(0);
      bruteForceStringMatch('abdeecde', 'cde').should.equal(5);
      bruteForceStringMatch('abcd', 'd').should.equal(3);
    });
  });
});
