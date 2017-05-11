// What is the Big O of this function?
//
// O(n^2) in the worst case scenario.
function insertionSort(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < i; j++) {
      if (input[i] < input[j]) {
        const spliced = input.splice(i, 1); // take something out
        input.splice(j, 0, spliced[0]);     // insert something back
      }
    }
  }
  return input;
}

// BEGIN
// [3,2,1]
// i = 0, j = 0
// check(3 < 3) FALSE
//
// i = 1, j = 0
// check(2 < 3) TRUE
// [2,3,1]
//
// i = 1, j = 1
// check(3 < 3) FALSE
//
// i = 2, j = 0
// check(1 < 2) TRUE
// [1,2,3]
//
// i = 2, j = 1
// check(3 < 2) FALSE
// END

// What's the difference between slice and splice?
//
// var a = ['zero', 'one', 'two', 'three'];
// var begin = 0
// var end   = 1
//
// a.slice(begin, end)
//
// => ['zero']
//
// The splice() method changes the contents of an array by removing existing
// elements and/or adding new elements.
//
// array.splice(start)
// array.splice(start, deleteCount)
// array.splice(start, deleteCount, item1, item2, ...)
//
// var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
//
// myFish.splice(2, 0, 'drum'); // insert 'drum' at 2-index position
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
//
// myFish.splice(2, 1); // remove 1 item at 2-index position (that is, "drum")
// myFish is ["angel", "clown", "mandarin", "sturgeon"]




console.log(insertionSort([3,2,1]));
