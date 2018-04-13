var moduleFile = require('./modulefile.js')

var storeNumber = moduleFile.stores;


storeNumber(2);
storeNumber(5);
storeNumber(1);
storeNumber(9);
storeNumber(9);

console.log(storeNumber(6));


var sortList = moduleFile.sortsList
console.log(sortList(storeNumber()));

