// Divide And Conquer
//
// ALGORITHM  Mergesort(A[0..n - 1])
//
// Desc:   Sorts a given array by recursive mergesort,
//         where n is the number of elements in the array.
// Input:  A zero-index array of n orderable elements.
// Output: Array A[0..n - 1] sorted in ascending order.
//
// def Mergesort do
//   if n > 1
//     copy A[0..FLOOR(n / 2) - 1] to B[0..FLOOR(n / 2) - 1]
//     copy A[FLOOR(n / 2)..n - 1] to C[0..FLOOR(n / 2) - 1]
//     Mergesort(B[0..FLOOR(n/2) - 1])
//     Mergesort(C[0..FLOOR(n/2) - 1])
//     Merge(B, C, A)
//   end
// end
function mergeSort(input) {
  if (input.length > 1) {
    let middle = Math.floor(input.length / 2);
    let left   = mergeSort(input.slice(0, middle));
    let right  = mergeSort(input.slice(middle, input.length));

    input = stitch(left, right, input);
  }

  return input;
}

// ALGORITHM  Merge(B[0..p - 1], C[0..q - 1], A[0..p + q - 1])
//
// Desc:   Merges two sorted arrays into one sorted array, where
//         p is the number of elements in array B and q is the
//         number of elements in array C.
// Input:  Arrays B[0..p - 1] and C[0..q - 1], both sorted.
// Output: Sorted array A[0..p + q - 1] of the elements of B and C.
//
// def Merge do
//   i <- 0; j <- 0; k <- 0
//   while i < p and j < q do
//     if B[i] <= C[j]
//       A[k] = B[i]
//       i <- i + 1
//     else
//       A[k] = C[j]
//       i <- i + 1
//     end
//     k <- k + 1
//   end
//
//   if i == p
//     copy C[j..q - 1] to A[k..p + q - 1]
//   else
//     copy B[i..p - 1] to A[k..p + q - 1]
//   end
// end
//
function stitch(left, right, original) {
  let
    i = 0,  // iterator for left side
    j = 0,  // iterator for right side
    k = 0;  // iterator for original array

  let
    p = left.length,
    q = right.length;

  // As long as there are elements we have to swap,
  // perform the swap either...
  while (i < p && j < q) {
    if (left[i] <= right[j]) {
      original[k] = left[i]; i += 1;
    }
    else {
      original[k] = right[j]; j += 1;
    }

    k += 1;
  }

  // If we've performed all the swaps on the left side,
  // all we need to do is concatenate the right side onto
  // the output array.
  if (i === p) {
    for (; j < q; j++, k++) { original[k] = right[j]; }
  }
  else {
    for (; i < p; i++, k++) { original[k] = left[i]; }
  }

  return original;
}

console.log(mergeSort(
  [3,2,1,5,4]
));
