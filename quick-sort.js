function quickSort(input) {
  if (input.length <= 1) { return input; } // base case

  let lastIndex = input.length - 1;
  let pivot  = input[lastIndex];
  let left   = [];
  let right  = [];

  for (let i = 0; i < lastIndex; i++) {
    if (input[i] < pivot) {
      left.push(input[i]);
    }
    else {
      right.push(input[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

let data = [8,1,5,2,4,3,0];

console.log(quickSort(data));
