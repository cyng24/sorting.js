function split(wholeArray) {
    var center = Math.floor(wholeArray.length/2);
    console.log('center of array', center);
    if (center === 0) return [wholeArray, []];
    var firstHalf = wholeArray.slice(0, center);
    var secondHalf = wholeArray.slice(center);
    //console.log('splitting', [firstHalf, secondHalf]);
    return [firstHalf, secondHalf];
  }

function merge(arr1, arr2) {
  console.log('arrays to be merged', arr1, arr2)
  var result = [];
  while(arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] <= arr2[0]) result.push(arr1.shift())
    else result.push(arr2.shift())
  }
  result = result.concat(arr1).concat(arr2);
  console.log('merge result', result)
  return result

}

function mergeSort(arr) {
  //console.log(arr);
  console.log('array', arr);
  if(arr.length < 2) return arr;
  else {
    console.log('array to split', arr);
    var splitArr = split(arr);
    console.log('splitArr', splitArr);

    return merge(mergeSort(splitArr[0]), mergeSort(splitArr[1]));
    console.log('merged array', merge(recurseOne, recurseTwo));
  }
}

