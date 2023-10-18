"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

//Question 1 - isTrue
function isTrue(input) {
    return input === true;
    }

// Question  2
function isFalse(input2) {
    return input2 === false
    }

// Question 3
function not(input3) {
    return !(input3)
}

//Question 4
function addOne(input) {
 let newNum =   parseInt(input)
    if (input === Infinity) {
        return Infinity
    } else if (!isNaN(input)) {
        return newNum + 1
    }
}


// console.log(addOne(-5))
//Question 5
function isEven(input5) {
    if (input5 % 2 === 0) {
        return true
    }else if (input5 % 2 !== 0 ) {
        return false
    } else {
        return false
    }

}

//Question 6

function isIdentical(userInput1,userInput2) {
    if (userInput1 === userInput2) {
        return true
    } else if (userInput1 !== userInput2) {
        return false
    }

}

//Question 7
function isEqual(userInput3, userInput4) {
    if (userInput3 == userInput4) {
     return true
    }else {
        return false
    }
}

//Question 8
function or(userInput5,userInput6) {
  return  userInput5 || userInput6

}

//Question 9

function and(firstInput,secondInput) {
    return firstInput && secondInput
}

//Question 10
function concat(myInput, myInput2) {
 return "".concat(myInput,myInput2)
}

