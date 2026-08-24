// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  size() {
    if (!this.head) {
      return 0;
    }

    let count = 1;
    let pointer = this.head;
    while (pointer.next) {
      pointer = pointer.next;
      count++;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return undefined;
    }

    let pointer = this.head;

    while (pointer.next) {
      pointer = pointer.next;
    }

    return pointer;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let pointer = this.head;
    while (pointer.next.next) {
      pointer = pointer.next;
    }

    pointer.next = null;
  }

  insertLast(data) {
    if (this.head) {
      this.getLast().next = new Node(data, null);
    } else {
      this.head = new Node(data, null);
    }
  }

  getAt(index) {
    if (!this.head) {
      return null;
    }

    let count = 0;

    let pointer = this.head;
    while (count !== index) {
      count++;
      if (!pointer.next) {
        return null;
      }
      pointer = pointer.next;
    }

    return pointer;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const elementBefore = this.getAt(index - 1);

    if (!elementBefore || !elementBefore.next) {
      return;
    }
    elementBefore.next = elementBefore.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data, null);
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const elementBefore = this.getAt(index - 1);

    if (!elementBefore || !elementBefore.next) {
      this.getLast().next = new Node(data, null);
      return;
    }

    const elementNext = elementBefore.next;
    elementBefore.next = new Node(data, elementNext);
  }

  forEach(fn) {
    if (!this.head) {
      return;
    }
    let pointer = this.head;
    let index = 0;
    while (pointer) {
      fn(pointer, index++);
      pointer = pointer.next;
    }
  }

  *[Symbol.iterator]() {
    if (!this.head) {
      return;
    }
    let pointer = this.head;
    while (pointer) {
      yield pointer;
      pointer = pointer.next;
    }
  }
}

module.exports = { Node, LinkedList };
