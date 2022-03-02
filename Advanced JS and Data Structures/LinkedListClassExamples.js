const LinkedList = require('./LinkedList.js');


let ll = new LinkedList();
//console.log(ll.isEmpty());
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(8);
console.log(ll.elementAt(0));
console.log(ll.elementAt(1));
console.log(ll.elementAt(2));
console.log(ll.elementAt(3));
console.log(ll.elementAt(4));


ll.getTail();
ll.removeFrom(3);
ll.getTail();

ll.printList();





