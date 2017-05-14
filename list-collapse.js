class ListNode {
  constructor(value = null) {
    this.value = value;
  }
}

class List {

  constructor() {
    this.count = 0;
    this.nodes = {};

    for (let i = 0; i < arguments.length; i++) {
      this.nodes[i] = arguments[i];
      this.count += 1;
    }
  }

  get(index) {
    this._check(() => index > this.count - 1 );

    const node = this.nodes[index];

    if (node) {
      return node.value;
    }
  }

  push(value) {
    const node = new ListNode(value=value);

    this.nodes[this.count] = node;
    this.count += 1;
  }

  pop() {
    const node = this.nodes[this.count - 1];

    if (node) {
      this._delete()

      return node.value;
    }
  }

  delete(index) {
    this._check(() => index > this.count - 1 );

    const node = this.nodes[index];

    if (node) {
      this._collapse(index);
    }
  }

  _check(test) {
    if (test() === true) {
      return new Error("Index out of range.");
    }
  }

  _collapse(index) {
    // Shift down
    for (let i = index; i < this.count; i++) {
      this.nodes[i] = this.nodes[i + 1];
    }

    this._delete();
  }

  _delete() {
    // Remove index
    delete this.nodes[this.count - 1];

    // Decrement count
    this.count -= 1;
  }
}


console.log(new List);

let list = new List();

list.push(10);

console.log(list.get(0))

list.push("hello");
list.push("world");
list.push(123);
list.push({hello: "world"});
list.push(456);
list.push(7.89);

console.log(list);

list.delete(3);

console.log(list);

console.log(list.pop());

console.log(list);
