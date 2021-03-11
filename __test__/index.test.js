// test fast-sorted-array

const {sortedFind, sortedInsert} = require('../src/fast-sort-array.js');

const log = console.log;

// insert attempt of 22.2222222222
const testArr = [];
for (let i = 0; i < 50; i++) {
  testArr[i] = i;
}
const val = 22.2222222222;
const expects = ['... 21,22,22.2222222222,23 ...'];


const result = sortedInsert(val, testArr);
log(`sortedInsert:
result:          ${JSON.stringify(result)}
testArr[result]: ${testArr[result]}
testArr:         ${JSON.stringify(testArr)}
expects:         ${JSON.stringify(expects)}`
);

let findResult = sortedFind(22.2222222222, testArr);
log(`\nsortedFind(22.2222222222):
result:          ${findResult}
testArr[result]: ${testArr[result]}
expects:         23`
);

findResult = sortedFind(22.33333, testArr);
log(`\nsortedFind(22.33333):
result:          ${findResult}
testArr[result]: ${testArr[result]}
expects:         -1`
);
