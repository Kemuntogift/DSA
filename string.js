// Given a string S of length N, write a JavaScript

// function that transforms the string by reversing characters in groups of four and returns the transformed string.

// e.g., when S = 'Lorem at'
// the output should be 'eroLta m'

// When S = ' Tempor ip'
// the output should be 'meT roppi'


let str = "Lorem at";

// method 1: for loop
function reverseString() {
    let splitStr = str.split("");

    let newArr = [];

    for (let i = 0; i < splitStr.length; i += 4) {
        let sliceReverse = splitStr
            .slice(i, i + 4)
            .reverse()
            .join("");
        newArr.push(sliceReverse);
    }

    let finalStr = newArr.join("");

    console.log(finalStr);
}

reverseString(str);

// method 2: for-of loop
function reverseString2(str) {
    let num = 0;

    let splitStr = str.split("");

    let newArr = [];

    for (let i of splitStr) {
        let reversedStr = splitStr
            // .split("")
            .slice((i = num), i + 4)
            .reverse()
            .join("");
        newArr.push(reversedStr);
        num += 4;
    }

    let finalStr = newArr.join("");

    console.log(finalStr);
}

reverseString2(str);