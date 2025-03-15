// Exercise 1: Check if a Number is Positive, Negative, or Zero
// Write a JavaScript program that takes a number as input and checks whether it is positive, negative, or zero.

var num = prompt("Enter a Number:");
if (num > 0) {
    alert(num, "number is positive.");
} else if (num < 0) {
    alert(num, "number is negative.");
} else {
    alert(num, "number is zero.");
}



// ----------------------------------------------------------------------------------------------
// Exercise 2: Check Even or Odd
// Write a JavaScript program that takes a number and checks if it is even or odd.


var number = prompt("Enter a number: ");
if(number % 2 == 0) {
   alert("The number is even.");
}
else {
    alert("The number is odd.");
}

// ----------------------------------------------------------------------------------------------
// Exercise 3: Check Voting Eligibility
// Write a JavaScript program that asks for a user's age and determines if they are eligible to vote (age should be 18 or above).

var age = prompt("Please enter your age");
    if (age < 18) {
        alert("You are not eligible to vote.");
    } else if (age >= 18) {
        alert("You are eligible to vote!");
    }
   
// ----------------------------------------------------------------------------------------------
    // Exercise 4: Find the Largest of Two Numbers
    // Write a JavaScript program to find the largest of two numbers given by the user
    
    var numeber_1,mumber_2;
	  numeber_1 = prompt("enter first number:");
	  numeber_2 = prompt("enter second number:");
	if(numeber_1>numeber_2)
	{
           alert(numeber_1+" is Largest number");
	}
	else
	{
	  alert(numeber_2+" is Largest number");
	}



    // ----------------------------------------------------------------------------------------------
    // Exercise 5: Check If a Person is Eligible for a Discount
    // A store gives a discount if:
    // The person is either a senior citizen (age 60 or above) or
    // The person has a membership card.
    // Write a JavaScript program that checks if a person is eligible for a discount.
    

    var age = prompt("Please enter your age:");
    var membership = prompt("Do you have a membership card? (yes/no)").toLowerCase() === "yes";
    if (age >= 60 || membership) {
        console.log("Eligible for discount");
    } else {
        console.log("Not eligible for discount");
    }

    // ----------------------------------------------------------------------------------------------
    // Exercise 6: Login System with Username and Password
    // Write a JavaScript program that checks if the username is "admin" and the password is "12345". If both match, display "Login successful", otherwise "Invalid credentials"
    var username = prompt("Enter your username:");
    var password = prompt("Enter your password:");
    if (username === "admin" && password === "12345") {
        alert("Login successful");
    } else {
        alert("Invalid credentials");
    }

// ----------------------------------------------------------------------------------------------
// Exercise 7: Grade System
// Write a JavaScript program that takes a student's marks and assigns a grade based on the following criteria:
// 90 and above → A
// 80 to 89 → B
// 70 to 79 → C
// 60 to 69 → D
// Below 60 → F

var marks = parseInt(prompt("Enter your marks:"));
var grade;
    if (marks >= 90) {
        grade = "A";
    } else if (marks >= 80) {
        grade = "B";
    } else if (marks >= 70) {
        grade = "C";
    } else if (marks >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }
    alert("Your grade is: " + grade);





    // ----------------------------------------------------------------------------------------------
    // Exercise 8: Traffic Light System
    // Write a JavaScript program that takes a traffic light color as input ("red", "yellow", or "green") and prints the appropriate action:
    // "red" → "Stop"
    // "yellow" → "Slow down"
    // "green" → "Go"



    var color = prompt("Enter the traffic light color (red, yellow, or green):").toLowerCase();
    var action;
    if (color === "red") {
        action = "Stop";
    } else if (color === "yellow") {
        action = "Slow down";
    } else if (color === "green") {
        action = "Go";
    } else {
        action = "Invalid color. Please enter 'red', 'yellow', or 'green'.";
    }
    alert(action);