function identifyPrime(nums) {
    if (nums <= 1) {
        return false;
    }
    if (nums <= 3) {
        return true;
    }
    if (nums % 2 === 0 || nums % 3 === 0) {
        return false;
    }

    let i = 5;
    while (i * i <= nums) {
        if (nums % i === 0 || nums % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }

    return true;
}

function filterByPrime(arr) {
    return arr.filter(identifyPrime);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNum = filterByPrime(numbers);

console.log(primeNum)


// We create a function identifyPrime(nums) to check whether a given number is prime or not
// function filterByPrime takes an array of numbers as input and returns the new array of prime numbers
// numbers is a variable representing an array declared by const keyword
// primeNum variable will store the result of applying the filterByPrime function
// to numbers array (filtering through the array)
// console.log(primeNum) will log the prime number array containing the prime number to 
// the console
// nums <= 1 return false if input number is less than 1 or equal to it 
// nums <= 3 return true if input is equal to or less than three
// nums % 2 === 0 || nums % 3 === 0 return false if number is divisible by three and two
// 