// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.data = [];
    this.front = 0;
  }

  add(el) {
    this.data.push(el);
  }

  remove() {
    if (this.front >= this.data.length) {
      return undefined;
    }

    return this.data[this.front++];
  }
}

module.exports = Queue;
