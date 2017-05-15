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

class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left  = left;
    this.right = right;
  }
}

class Tree {
  
  constructor(data) {
    this.root   = null;
    this.length = 0;
  }

  add(value) {
    // No root node, create root
    if (this.root === null) {
      this.root = new Node(value);
      this.length += 1;
      return;
    }

    let current = this.root;

    while (true) {
      if (current.value > value) {
        // Go left!

        if (current.left) {
          current = current.left;
        }
        else {
          current.left = new Node(value, null, current);
          break;
        }
      }
      else {
        // Go right!

        if (current.right) {
          current = current.right;
        }
        else {
          current.right = new Node(value, current, null);
          break;
        }
      }
    }

    this.length += 1;
  }

  search(value) {
    let left  = 0;                 // left side iterator
    let right = this.length - 1;   // right side iterator
    let current = this.root;

    while (left <= right) {
      let index = Math.floor((left + right) / 2);

      if (value === current.value) {       // index found
        return index;
      }
      else if (value < current.value) {    // decrement
        right = index - 1;
        current = current.left;
      }
      else {                            // increment
        left  = index + 1;
        current = current.right;
      }
    }

    return false;
  }
}

class BST {

  constructor(data) {
    this.data = data;
  }

  search(value) {
    let left = 0;                       // left side iterator
    let right = this.data.length - 1;   // right side iterator

    while (left <= right) {
      let m = Math.floor((left + right) / 2);
      console.log(m)

      if      (value === this.data[m]) { return m; }       // index found
      else if (value < this.data[m])   { right = m - 1; }  // decrement
      else                             { left  = m + 1; }  // increment
    }

    return false;
  }
}


// NOTE
// Binary search trees can only process sorted data.
// const data = [1,2,3,4,5];
// const tree = new BST(data);
// console.log(tree.search(1));

const tree = new Tree();

tree.add(1);
tree.add(2);
tree.add(3);
tree.add(4);

console.log(tree);
// console.log(tree.search(1));
