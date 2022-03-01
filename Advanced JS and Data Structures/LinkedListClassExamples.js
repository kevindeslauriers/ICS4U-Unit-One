const LinkedList = require('./LinkedList.js');


let ll = new LinkedList();
//console.log(ll.isEmpty());
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(8);


ll.getTail();
ll.removeFrom(3);
ll.getTail();

ll.printList();



