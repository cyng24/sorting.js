function bubbleSort(array){
    var swapped = true;
    while(swapped){
        swapped = false;
        for(var i=0; i<array.length-1; i++){
            if(array[i]>array[i+1]){
                swap(array, i);
                swapped = true;
            }
        }
    }
    return array;
}

function swap(array2, index){
    var temp = array2[index];
    array2[index] = array2[index+1];
    array2[index+1] = temp;
}