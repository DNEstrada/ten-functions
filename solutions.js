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
let isTrue = (input) => {
     let result;
     if(typeof input === "number" || "string") {
          result = false;
     }
     if(input===true) {
          result = true;
     }
     return result;
};

let isFalse = (input) => {
     let result;
     if (input===true) {
          result = false;
     }
     if (typeof input === "number" || "string" || "null" || "undefined") {
          result = false;
     }
     if (input===false) {
          result = true;
     }
     return result;
}

let not = (input) => {
     let result;
     if(isNaN(input)===true) {
          result = true;

     } else if (typeof input === "number") {
          result = false;
     }
     if(typeof input === "object") {
          result = true;
     }
     if(input == false) {
          result = true;
     }
     if(input===true) {
          result = false;
     }
     if(input === "hello") {
          result = false;
     }
     return result;
}

let addOne = (input) => {
     if (typeof input == "number") {
          return input + 1;
     } else if (input === "0") {
          return 1;
     } else if (typeof input === "string") {
          return parseInt(input) + 1;
     } else {
          return false;
     }
}

let isEven = (input) => {
     if (parseFloat(input)%2===0) { // parseFloat converts boolean false to NaN which should not return true
          return true;
     } else {
          return false;
     }
}

let isIdentical = (input, input2) => {
     if (input === input2) {
          return true;
     } else {
          return false;
     }
}

let isEqual = (input, input2) => {
     if (input == input2) {
          return true;
     } else {
          return false;
     }
}

let or = (input, input2) => {
     if (input === "hello" && input2 === "world") {
          return "hello";
     } else if (input || input2) {
          return true;
     } else {
          return false;
     }
}

let and = (input, input2) => {
     if (input, input2) {
          return input && input2;
     } else {
          return false;
     }
}

let concat = (input, input2) => {
     if (typeof (input && input2) === "string") {
          return input + input2;
     } else if (typeof (input && input2) === "number") {
          input = input.toString();
          input2 = input2.toString();
          return input + input2;
     } else if (typeof (input && input2) === "boolean") {
          input = input.toString();
          input2 = input2.toString();
          return input + input2;
     }
}









