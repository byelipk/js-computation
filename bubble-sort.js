// What is the Big O on this implementation of
// the bubble sort algorithm?
//
// We're looking at an O(n^2) algorithm.
//
// Why?
//
// We esentially have a nested loop with a for loop
// wrapped inside a do...while construct. We see a lot
// of wasted cycles with this implementation. For example,
// even if we've already sorted the first half of the array,
// we'll still continue to check if those items are in the
// correct position.
//
// If we make make assumptions that certain parts of the array are sorted,
// then we will not need to sort it again. So we can start ignoring
// certain parts of the array to improve efficiency.
function bubbleSort(input) {
  do {
    var swapped = false;
    for (var i = 0; i < input.length; i++) {
      if (input[i] > input[i+1]) {
        // Perform the swap
        var temp   = input[i];
        input[i]   = input[i+1];
        input[i+1] = temp;

        // Mark off that there's been a swap
        swapped    = true;
      }
    }
  } while (swapped);

  return input;
}

console.log(bubbleSort([3,2,1]));
