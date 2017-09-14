describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([4,3,2]) ).toEqual([ [4], [3, 2] ]);// your code here
  });

  it('splits an array of one element', function() {
    expect(split([2])).toEqual([[2]]);// your code here
  });

  it('also splits a long array', function() {
    expect(split([1, 2, 3, 4, 5, 6])).toEqual([[1, 2, 3], [4,5,6]]);
  })
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([2, 4], [3]) ).toEqual([2, 3, 4]);// your code here
  });

  it('splits an array of one element', function() {
    expect(split([2])).toEqual([[2]]);// your code here
  });

  it('also splits a long array', function() {
    expect(split([1, 2, 3, 4, 5, 6])).toEqual([[1, 2, 3], [4,5,6]]);
  })
});

