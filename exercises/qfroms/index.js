// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  add(el) {
    this.stack1.push(el);
  }

  remove() {
    // Invert the stack into stack2
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }

    // Get the first element which as the last of stack1
    const lastElement = this.stack2.pop();

    // Invert the stack again into stack1
    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.pop());
    }

    return lastElement;
  }

  peek() {
    // Invert the stack into stack2
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }

    // Get the first element which as the last of stack1
    const lastElement = this.stack2.peek();

    // Invert the stack again into stack1
    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.pop());
    }

    return lastElement;
  }
}

module.exports = Queue;
