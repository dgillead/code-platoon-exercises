// 1) Given an array of numbers, return a new array of the even numbers.

function evenNums(array) {
    var evenArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenArray.push(array[i]);
        }
    }
    return evenArray;
}

evenNums([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// 2) Given an array, return a new array with all elements but the first one.

function sliceArray(array) {
    return array.slice(1);
}

sliceArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// 3) Given a string and a character, count how many times that character occurs in the string.

function countChars(string, character) {
  var count = 0;
  var stringArray = string.split("");
    for (var i = 0; i < stringArray.length; i++) {
      if (stringArray[i] === character) {
        count++;
      }
    }
    return count;
}

countChars("hello", "l");

// 4) Given a string, check to see whether it is a palindrome (the same backward and forward i.e., 'racecar')

function palindrome(string) {
  var reverseString = string.split("").reverse().join("");
  return string === reverseString;
}

palindrome("racecar");

// 5) Given an object, a key, and an array, set a new property on the object at the given key, with its value set to the given array.

var myObj = {};

function addArrayProperty(obj, key, arr) {
  // your code here
  obj[key] = arr;
  return obj;
}

addArrayProperty(myObj, "hello", [2, 3, 4]);
addArrayProperty(myObj, "goodbye", [5, 6, 7]);