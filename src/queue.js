const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

 class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.queue = null;
  }
  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    let newNode = new ListNode(value);

    if (this.queue) {
      let current = this.queue;
      let flag = true;
      while(current && flag) {
        if (!current.next) {
          current.next = newNode;
          flag = false;
        }
        current = current.next;
      }
    } else {
      this.queue = newNode;
    }
  }

  dequeue() {
    let res = this.queue.value;
    this.queue = this.queue.next;
    return res;
  }
}

module.exports = {
  Queue
};
