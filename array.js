// Given an array of integers, find the sum of its elements.

// For example,
// if the array, [1, 2, 4, 7], so
// return 14.


function sum(arr) {
    let addition = 0;
    for (let i = 0; i < arr.length; i++) {
        addition += arr[i];
    }
    return addition;
}
console.log(sum([2, 4, 5, 8]));