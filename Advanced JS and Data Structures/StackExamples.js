const Stack = require('./stack.js');

let s = new Stack();
s.push(6);
s.push(7);
s.push(9);
s.push(10);
s.display();
console.log(s.pop());
s.display();

console.log(s.peek());