const Queue = require('./Queue.js');

const qq = new Queue();
qq.enqueue(1);
qq.enqueue(2);
qq.enqueue(3);
qq.enqueue(4);

qq.dequeue();

qq.display();
