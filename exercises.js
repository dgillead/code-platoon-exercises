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