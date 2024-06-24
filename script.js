function getTicketPrice() {
    // Prompt the user to enter their age
    let age = prompt("Please enter your age:");

    // Convert the entered age to a number
    age = Number(age);

    // Determine the ticket price based on the age
    let ticketPrice;
    if (age <= 12) {
        ticketPrice = 10;
    } else {
        ticketPrice = "Price for other age groups is not specified in the criteria.";
    }

    // Display the ticket price
    alert("The ticket price is: $" + ticketPrice);
}

// Call the function to execute
getTicketPrice();


function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Base number input
let n = 5
let power = 3
let num = 1;
for (let i = 0; i < power; ++i) {
    num = num * n;
}

console.log(num);