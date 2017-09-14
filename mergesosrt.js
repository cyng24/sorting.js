function split(wholeArray) {
    var center = Math.floor(wholeArray.length/2);
    if (center === 0) return [wholeArray];
    var firstHalf = wholeArray.slice(0, center);
    var secondHalf = wholeArray.slice(center);
    return [firstHalf, secondHalf];
  }


