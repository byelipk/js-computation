// ALGORITHM  BinarySearch(A[0..n - 1], K)
//
// Desc:  Implements nonrecursive binary search where
//        A[0..n - 1] is a sorted list and K is the value
//        we're searching for.
//
// Input: An array A[0..n - 1] sorted in ascending order and
//        a search key K.
//
// Output: An index of the array's element that is equal to K
//         or -1 if there is no such element.
//
//
// def BinarySearch do
//   i <- 0;
//   r <- n - 1;
//
//   while l <= r do
//     m <- FLOOR((l + r) / 2)
//     if K = A[m] return m
//     else if K < A[m] r <- m - 1
//     else l <- m + 1
//   end
//
//   return -1
// end

class BST {

  constructor(data) {
    this.data = data;
  }

  search(value) {
    let left = 0;                       // left side iterator
    let right = this.data.length - 1;   // right side iterator

    while (left <= right) {
      let m = Math.floor((left + right) / 2);

      if      (value === this.data[m]) { return m; }       // index found
      else if (value < this.data[m])   { right = m - 1; }  // decrement
      else                             { left  = m + 1; }  // increment
    }

    return false;
  }
}


// NOTE
// Binary search trees can only process sorted data.
const data = [1,2,3,4,5];

const tree = new BST(data);

console.log(tree.search(5));
