function generateNumbers(start, end) {
    // Created a function generateNumbers that should generate an array between two passed in values.
    // Passed in parameters are (start, end). They represent the range of numbers we'll pass in as arguments
    if (start > end) {
        return [];
    } // Pass in a condition i.e if start > end returns an empty array
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i)
    } //it navigate from the start number to the end number pushing each number into the array.
    return result;
}

console.log(generateNumbers(1, 9))
// This returns an array of numbers from 1 to 9 
console.log(generateNumbers(1, 70))
// This returns an array of numbers from 1 to 70