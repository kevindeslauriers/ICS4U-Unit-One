const LinkedList = require('./LinkedList.js');

module.exports = class Stack {
   constructor() {
      this.stack = new LinkedList();
   }

   push(element) {
      this.stack.insertAt(element, 0);
   }

   pop() {
      return this.stack.removeFrom(0);
   }

   size() {
      return this.stack.getSize();
   }

   isEmpty() {
      return this.stack.isEmpty();
   }

   peek() {
      return this.stack.elementAt(0);
   }

   display() {
      console.log('TOP');
      this.stack.printList();
   }

   clear() {
      this.stack.clear();
   }


}

