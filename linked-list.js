class ListNode {
  constructor(value) {
    this.prev  = null;
    this.next  = null;
    this.value = value;
  }
}

// It's more efficient to traverse a linked list in order to
// delete an element than deleting an element and shifting
// the remaining elements down in memory.
class LinkedList {

  constructor() {
    this.length = 0;
    this.first  = null;
    this.last   = null;
  }

  push(value) {
    const node = new ListNode(value);

    if (this.last === null) {
      // Initialize new list
      this.first = node;
      this.last  = node;
    }
    else {
      // Push new node onto tail
      this.last.next = node;
      node.prev      = this.last;
      this.last      = node;
    }

    this._incrementLength();

    return node;
  }

  pop() {
    const node = this.last;

    if (node) {
      this.delete(this.length - 1);
      return node;
    }
  }

  get(index) {
    const node = this.find(index);

    if (node) {
      return node.value;
    }
  }

  find(index) {
    let current = this.first;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  delete(index) {
    const node = this.find(index);

    if (node === this.first && node === this.last) {
      this.first = null;
      this.last  = null;
    }
    else if (node === this.first) {
      this.first = node.next;
      this._check(() =>
        this.first !== null, "Invalid list. Head is NULL.");
      this.first.prev = null;
    }
    else if (node === this.last) {
      this.last = node.prev;
      this._check(() =>
        this.last !== null, "Invalid list. Tail should be NULL.");
      this.last.next = null;
    }
    else {
      const prev = node.prev;
      const next = node.next;
      prev.next  = next;
      next.prev  = prev;
    }

    this._decrementLength();

    return node;
  }

  _decrementLength() {
    this.length -= 1;
  }

  _incrementLength() {
    this.length += 1;
  }

  _isEmpty() {
    if (this.first === null && this.last === null) {
      return true;
    }
  }

  _check(func, msg) {
    if (func() === false) {
      throw new Error(msg);
    }
  }
}

module.exports = { LinkedList, ListNode }
