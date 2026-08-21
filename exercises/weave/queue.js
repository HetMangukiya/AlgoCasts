// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
    this.next = 0;
  }

  add(el) {
    this.data.push(el);
  }

  remove() {
    if (this.next >= this.data.length) {
      return undefined;
    }

    const nextEl = this.data[this.next];
    this.data[this.next++] = null;

    return nextEl;
  }

  peek() {
    return this.data[this.next];
  }
}

module.exports = Queue;
