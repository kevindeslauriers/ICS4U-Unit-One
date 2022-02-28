const LinkedList = require('./LinkedList.js');


let ll = new LinkedList();
//console.log(ll.isEmpty());
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(8);
ll.insertAt(4, 3);
ll.insertAt(10, 0);
//console.log(ll.isEmpty());

//console.log(ll.size);
//ll.printList();

ll.removeFrom(5);
ll.printList();