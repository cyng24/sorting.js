describe('Bubble Sort', function(){

    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('sorts an array', function(){
        expect( bubbleSort([4,3,2]) ).toEqual( [2,3,4] );
    });
    beforeAll(function () {
        spyOn(window, 'swap').and.callThrough();
    });
    it('getting to sort involves exactly three sorts', function(){
        expect(swap.calls.count()).toEqual(3);
    })

     it('sorts a larger array', function(){
        expect( bubbleSort([6,2,8,4,9,1,5,7,3,0]) ).toEqual( [0,1,2,3,4,5,6,7,8,9] );
    });

    it('handles repeated numbers', function(){
        expect( bubbleSort([4,4,2]) ).toEqual( [2,4,4] );
    });
});