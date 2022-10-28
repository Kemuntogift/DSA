// Given a string S of length N, write a JavaScript

// function that transforms the string by reversing characters in groups of four and returns the transformed string.

// e.g., when S = 'Lorem at'
// the output should be 'eroLta m'

// When S = ' Tempor ip'
// the output should be 'meT roppi'

function reverseString(arr) {
    let result = [];
    let prevWord = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        prevWord.push(arr[i]);
        if (prevWord.length === 4) {
            result.push(prevWord);
            prevWord = [];
        }
    }

    return result;
}