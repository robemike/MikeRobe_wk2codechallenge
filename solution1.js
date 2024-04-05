function lowerToUpperCase(string) {
    // i've defined a function lowerToUpperCase passing in the parameter string 
    return string.split('').map(char => {
        // string.split('') splits the string we want to work on into an array of individual characters
        // the map() function checks the characters converting them to lower and uppercase
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } // We pass in a condition i.e: if character is strictly in uppercase should return lowercase 
        else {
            return char.toUpperCase();
        } // else return to uppercase
    }).join(''); // The resulting array is joined back into a single string using join('')
}

console.log(lowerToUpperCase("The Quick Brown Fox"));
// This prints a message with the uppercase letters in lowercase and lowercase letters in uppercase

console.log(lowerToUpperCase("This should change UPPERCASE TO LOWERCASE and lowercase to uppercase"))
// This also prints the same message with the uppercase letters in lowercase and lowercase in uppercase.