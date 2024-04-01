function lowerToUpperCase(string) {
    return string.split('').map(char => {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join('');
}

console.log (lowerToUpperCase("The Quick Brown Fox"));

console.log (lowerToUpperCase("This should change UPPERCASE TO LOWERCASE and lowercase to uppercase" ))


// i've defined a function lowerToUpperCase passing in the parameter string 
// string.split('') splits the string we want to work on into an array of individual characters
// the map() function checks the characters converting them to lower and uppercase
// We pass in a condition i.e: if character is strictly in uppercase should return lowercase
// else return to uppercase
// The resulting array is joined back into a single string using join('')
// Line console.log (lowerToUpperCase("The Quick Brown Fox"));  logs into our console to confirm if 
// it is working