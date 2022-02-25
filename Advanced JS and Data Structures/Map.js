const fields = { 'prop1': 1, 31: 2, 'prop3': 3 };

//console.log(fields['prop1']);
//console.log(fields[31]);


const obj1 = {};
const obj2 = {};
const badObject = { obj1: 'Dentist', obj2: 'Doctor' };
console.log(badObject);

console.log(badObject['obj1'], badObject['obj2']);

const map1 = new Map();
map1.set('prop', 1);
map1.set('prop2', 2);

console.log(map1);

console.log(map1.get('prop'));

console.log(map1.keys());
console.log(map1.values());
console.log(map1.entries());
console.log(map1.size);
console.log(map1.has('prop'));

map1.forEach((val, key) => { console.log(val, key) });

//fields.set('prop5', 9);
fields['prop5'] = 9;
console.log(fields);


