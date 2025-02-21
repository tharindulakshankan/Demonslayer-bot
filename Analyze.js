// analyze.js
const { ownerNumber } = require('./config'); // Adjust the path if necessary

// Now you can use ownerNumber in your analyze.js file
console.log(`The owner number is: ${ownerNumber}`);

// Example usage in a function
function checkOwner(senderNumber) {
    if (senderNumber === ownerNumber) {
        console.log("This sender is the owner.");
    } else {
        console.log("This sender is not the owner.");
    }
}

// Example call
checkOwner('94773010580'); // Replace with the actual sender number to check