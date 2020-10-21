const convertToC = require('./f2c');
const convertToF = require('./c2f');
/*
This is our front-end file
In charge of interactions only

1. User types `node main.js` and some arguments
2. Node puts arguments into process.argv
3. We're going to send that input to our back end function
4. The back end will return an answer
5. We'll print out that answer to the user
*/

// Grab temp from user
const temp = process.argv[2];
// Grab unit from user
const unit = process.argv[3];

// If unit is C, get answer from convertToC
//const result = convertToC(temp);
// If unit is F, get answer from convertToF
//const result = convertToC(temp);

// As an if/else statement
if (unit.toLowerCase() === 'c') {
    const celcius = convertToC(temp);
    console.log(celcius);
} else {
    const fahrenheit = convertToF(temp);
    console.log(fahrenheit);
}

// As a ternary
console.log(unit.toLowerCase() === 'c' ? convertToC(temp) : convertToF(temp));