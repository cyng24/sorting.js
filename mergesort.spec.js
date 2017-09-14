describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([4,3,2]) ).toEqual([ [4], [3, 2] ]);// your code here
  });

  it('splits an array of one element', function() {
    expect(split([2])).toEqual([[2], []]);// your code here
  });

  it('also splits a long array', function() {
    expect(split([1, 2, 3, 4, 5, 6])).toEqual([[1, 2, 3], [4,5,6]]);
  })

  it('also splits a long array', function() {
    expect(split([6,2,8,4,9,1,5,7,3,0])).toEqual([[6, 2, 8, 4, 9], [1, 5, 7, 3, 0]]);
  })

});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([2, 4], [3]) ).toEqual([2, 3, 4]);// your code here
  });

  it('merges an empty array with a single element array', function() {
    expect(merge([2], [])).toEqual([2]);// your code here
  });

  it('also merges a long array', function() {
    expect(merge([2, 5, 6], [1, 3, 4])).toEqual([1, 2, 3, 4, 5, 6]);
  })
});


describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([2, 4], [3]) ).toEqual([2, 3, 4]);// your code here
  });

  it('merges an empty array with a single element array', function() {
    expect(merge([2], [])).toEqual([2]);// your code here
  });

  it('also merges a long array', function() {
    expect(merge([2, 5, 6], [1, 3, 4])).toEqual([1, 2, 3, 4, 5, 6]);
  })
});

describe('Merge Sort', function(){

it('sorts a larger array', function(){
  expect( mergeSort([6,2,8,4,9,1,5,7,3,0]) ).toEqual( [0,1,2,3,4,5,6,7,8,9] );
});

it('handles repeated numbers', function(){
  expect( mergeSort([4,4,2]) ).toEqual( [2,4,4] );
});

});

