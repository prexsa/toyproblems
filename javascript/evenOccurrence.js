// Even Occurrence

// Find the first item that occurs an even number of times in an array.
// Remember to handle multiple even-occurrence items and return the first one.
// Return null if there are no even-occurrence items.

// INPUT: [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]
// OUTPUT: 2

// INPUT: [ "cat", "dog", "dig", "cat" ]
// "cat"

// function evenOccurrence (arr) {
//   var obj = {};
//   for (var i = 0; i < arr.length; i++){
//       obj[arr[i]] = obj[arr[i]] + 1 || 1;
//   }
//   for (var i = 0; i < arr.length; i++){
//     if(obj[arr[i]] % 2 === 0){
//       return arr[i];
//     }
//   }
//   return null;
// }

// Refactored:

const evenOccurrence = (arr, obj = {}) => arr.map(a => {
  obj[a] = obj[a] +1 || 1;
  return a;
}).filter(a => obj[a] % 2 === 0).splice(0,1).join('')