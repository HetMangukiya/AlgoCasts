// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.listeners = {};
  }

  // Register an event handler
  on(eventName, callback) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [callback];
    } else if (!this.listeners[eventName].includes(callback)) {
      this.listeners[eventName].push(callback);
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.listeners[eventName]) {
      for (let listener of this.listeners[eventName]) {
        listener();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName, callback) {
    if (callback) {
      this.listeners[eventName] = this.listeners[eventName].filter(
        (listener) => listener !== callback,
      );
    } else {
      delete this.listeners[eventName];
    }
  }
}

module.exports = Events;
