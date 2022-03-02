const LinkedList = require('./LinkedList.js');

module.exports = class Queue {
   constructor() {
      this.queue = new LinkedList();
      /* treat the back of the linkedList as the back of the queue */
   }

   enqueue(element) {
      this.queue.add(element);
   }

   dequeue() {
      return this.queue.removeFrom(0);
   }

   peek() {
      return this.queue.elementAt(0);
   }

   isEmpty() {
      return this.queue.isEmpty();
   }

   getSize() {
      return this.queue.getSize();
   }

   clear() {
      return this.queue.clear();
   }

   display() {
      console.log('FRONT');
      this.queue.printList();
      console.log('BACK');
   }
}