// 1. Write a function that takes an array and returns the sum of all elements.
// function sumArray(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum; // return sum
// }
// let arr = [1, 2, 3, 4];
// let result = sumArray(arr);
// document.writeln(result);

//2. Write a function that takes an array and returns the maximum element.

// function findMax(arr) {
//   let max = arr[0]; // let the 1st element max ! start ke time

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i]; // final jo max value hai wo mil jaye to
//     }
//   }

//   return max; //return max !
// }
// let arr = [1, 4, 5, 8, 7];
// let result = findMax(arr);// catch the returned value !
// document.writeln(result);

//3. Write a function that takes an array and returns the minimum element.

// function findMin(arr) {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }
// let arr = [3, 4, 1, 7, 9];
// let result = findMin(arr);
// document.writeln(result);

// 4.Write a function that takes an array and returns the average of all numbers.
// function findAvg(arr) {
//   let sum = 0,
//     average;
//   for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   average = sum / arr.length;
//   return average;
// }
// let arr = [1, 2, 3, 4];
// let result = findAvg(arr);
// document.writeln(result);
//5.Write a function that takes an array and returns a new array in reversed order.
// function reverseArray(arr) {
//   let reversed = []; // empty array

//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]); //.push = > Add elements from the end to the start
//   }

//   return reversed; // Return the new reversed array
// }
// let arr = [1, 2, 3, 4, 5];
// let result = reverseArray(arr);
// document.writeln(result);

// 6.Write a function that takes an array and returns only even numbers in a new array.

// function findEvenNumber() {
//   evennum = []; // empty array
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       evennum.push(arr[i]);
//     }
//   }
//   return evennum;
// }
// let arr = [1, 2, 3, 4, 6];
// let result = findEvenNumber(arr);
// document.writeln(result);

// 7.Write a function that takes an array and returns only odd numbers in a new array.

// function findOddNumber() {
//   oddnum = []; // empty array
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//       oddnum.push(arr[i]);
//     }
//   }
//   return oddnum;
// }
// let arr = [1, 2, 3, 4, 5];
// let result = findOddNumber(arr);
// document.writeln(result);

// 8.Write a function that takes an array and counts how many positive numbers are present.

// function findCountOfPositive(arr) {
//   let count = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       count++;
//     }
//   }
//   return count;
// }
// let arr = [1, 2, 3, 4, 5];
// let result = findCountOfPositive(arr);
// document.writeln(result);

// 9.Write a function that takes an array and checks if a given element exists or not.

// function elementExists(arr, element) {
//   return arr.includes(element);
//   // arr.includes => checks if an element exists (true) or not exists (false)
// }
// let arr = [1, 2, 6, 7, 8];
// let result = elementExists(arr, 5);
// document.writeln(result);

// 10.Write a function that takes an array and returns the index of a given element.

// function findIndex(arr, element) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === element) {
//       return i;
//     }
//   }
//   return -1; // Return -1 if element is not found .....
// }
// let arr = [1, 2, 5, 4];
// let result = findIndex(arr, 5); // here we have to pass the array & element
// document.writeln(result); // final output

// 11 Write a function that takes an array and returns a new array without duplicate values.

// function removeDuplicates(arr) {
//   const result = []; // empty array to store the old array

//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       // 1st---> check duplicates using (.includes) if not found then push ke through
//       //result ke andar store
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// let arr = [1, 5, 4, 5, 9, 7, 5, 7];
// let result = removeDuplicates(arr);
// document.writeln(result);

//12 Write a function that merges two arrays and returns a single array.

// function mergeArrays(arr1, arr2) {
//   return arr1.concat(arr2); // here arr1 is merged with arr2 ....
// }
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5];
// let result = mergeArrays(arr1, arr2);
// document.writeln(result);

//13.Write a function that takes an array and returns the product of all elements.
// function productOfArray(arr) {
//   let product = 1;
//   for (let i = 0; i < arr.length; i++) {
//     product *= arr[i];
//   }
//   return product;
// }
// let arr = [1, 2, 3, 4];
// let result = productOfArray(arr);
// document.writeln(result);
//13. Write a function that sorts an array in ascending order without using .sort().

//14.Write a function that counts how many times each element appears in an array.

// 15.Write a function that takes an array and returns the second largest number.

// 16.Write a function that rotates an array by given positions (e.g., 1 → 2 → 3 → 1).
