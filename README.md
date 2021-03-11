# fast-sorted-array
Fast JavaScript functions *O(log n)* for searching and inserting into a sorted number array
---
Very fast insertion into a sorted array of numbers, often 2 orders of magnitude faster than conventional methods.

While conventional sorted array insertion is O(n log n), `fast-sorted-array` insertion time is O(log n).
## Install
```shell
npm install fast-sorted-array
```
## Usage
```javascript
const {sortedFind, sortedInsert} = require('fast-sort-array');

const array = [/* ... */];
const number = 3.14;

let index = sortedFind(number, array);
let position = sortedInsert(number, array);
```
