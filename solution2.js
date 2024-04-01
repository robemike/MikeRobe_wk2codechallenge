function generateNumbers(start, end) {
    if (start > end) {
        return [];
    }
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i)
    }
    return result;
}

console.log (generateNumbers(1, 9))

console.log (generateNumbers(1, 70))

// Created a function generateNumbers that should generate an array 
// between two passed in values. Passed in parameters are (start, end)
// They represent the range of numbers we'll pass in as arguments
// pass in a condition i.e if start > end returns an empty array
// it navigate from the start number to the end number pushing each number into 
// the array 
// line console.log (generateNumbers(1, 9)) logs it to our console to confirm
// if the function is working