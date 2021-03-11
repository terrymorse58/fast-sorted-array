// Fast Sorted Array Insertion - insert a number into a sorted array

/**
 * find the array index that contains `num`
 * @param {Number} num
 * @param {Number[]} array
 * @return {number} - the array index position
 */
function sortedFind (num, array) {

  let start = 0,
    end = array.length - 1,
    midPoint,
    aMidPoint;

  if (end < 0 || num > array[end] || num <= array[start]) {
    return -1;
  }

  while (true) {

    if (end <= start + 1) {
      if (array[start] === num) {
        return start;
      }
      if (array[end] === num) {
        return end;
      }
      break;
    }

    midPoint = Math.floor(start + (end - start) / 2);
    aMidPoint = array[midPoint];

    if (aMidPoint < num) {
      start = midPoint;
    } else  if (aMidPoint > num) {
      end = midPoint;
    } else { // aMidPoint === num
      return midPoint;
    }

  }
  return -1;
}

/**
 * insert a number into a sorted array, with no duplicates
 * @note does not insert if number already exists in array
 * @param {Number} num
 * @param {Array} a
 * @return {number} - the array index of the num
 */
function sortedInsert (num, a) {

  let start = 0,
    end = a.length - 1,
    midPoint,
    position;

  if (end < 0) {
    position = 0;
  } else if (num > a[end]) {
    position = end + 1;
  } else if (num <= a[start]) {
    position = start;
  } else while (true) {
    if (end <= start + 1) {
      position = end;
      break;
    }
    midPoint = Math.floor(start + (end - start) / 2);
    if (a[midPoint] < num) {
      start = midPoint;
    } else  if (a[midPoint] > num) {
      end = midPoint;
    } else { // aMidPoint === num
      position = midPoint;
      break;
    }
  }

  // insert when num is NOT already in a (no duplicates)
  if (a[position] !== num) {
    a.splice(position, 0, num);
  }

  return position;
}

if (module) {
  module.exports = {
    sortedFind,
    sortedInsert
  };
}
