function identifyPrime(nums) {
    // We create a function identifyPrime(nums) to check whether a given number is prime or not

    if (nums <= 1) {
        return false;
    }
    // prime numbers are 2 and others odd numbers whose only factors are one and itself.
    // nums <= 1 return false if input number is less than 1 or equal to it as one is not a prime number 
    if (nums <= 3) {
        return true;
    }
    // nums <= 3 return true if input is equal to or less than three i.e 2 and 3 
    if (nums % 2 === 0 || nums % 3 === 0) {
        return false;
    }
    // nums % 2 === 0 || nums % 3 === 0 return false if number is divisible by three and two


    let i = 5;
    while (i * i <= nums) {
        if (nums % i === 0 || nums % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }

    return true;
}

function filterByPrime(array) {
    // function filterByPrime takes an array of numbers as input and returns the new array of prime numbers
    return array.filter(identifyPrime);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers is a variable representing an array declared by const keyword

const primeNum = filterByPrime(numbers);
// primeNum variable will store the result of applying the filterByPrime function to numbers array (filtering through the array)

console.log(numbers);
// This returns array numbers.
console.log(primeNum);
// This returns a new array [2, 3, 5, 7] filtered from array numbers.