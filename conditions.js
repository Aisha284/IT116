console.log("Hello World");
////Created the let varible randomNumber and used the Math.random function and everythime I run the JS code its gonna give me back a random number between 0.0 and 1 

let randomNumber = Math.random(); //0.0-1
////if condtion with a block of code in this case the console.g with a string if its greater then 0.5
if (randomNumber < 0.50) {
    console.log("Condition was met");
    console.log(randomNumber);
}
///if condition was met run random number & 'condition was met'
if (randomNumber >= 0.5) {
    console.log('Condition was Met');
    console.log(randonNumber);
    
}
///else if condition. string varibale is saturday so console.log returns Saturday
//Created a string varible where I am passing them into multiple contions and if they do not much it does not run code till whatever is in the argument parameter CALLED A IF ELSE CONDITON 
const dayOfWeek = 'Saturday';
if (dayOfWeek === 'Monday') {
    console.log("Yay its Monday!");

} else if (dayOfWeek === 'Friday'){

    console.log("Yay Its Friday");

} else if (dayOfWeek === 'Saturday') {

    console.log("You have the correct Day from the variable"); 
}


//Application that takes in a number and whatever that number is it will run through a number of if condtions and which ever the condtions matched it will show a output
//Created a varible with a if condition, with condtions (age) is less then any of the numbers in the else if statment it will run the code inside the block
//else if conditon. Prompts "enter an age"
const age = prompt("Enter An Age");

if (age < 5) {
    console.log("Hey, you're just a baby!"); 
//else if statement that runs whats in this block
} else if (age <10 ) {
    console.log("Hey, youre just a kid!");
//else if statement that runs whats in this block
} else if (age <35) {
    console.log("You're getting older.");
}
// IF ALL OTHER CONDITIONS FAIL - ELSE.

else {
    console.log("You are over the age of 35.");
}

const fruit = 'Papayas';
// Cleaner case statments, put a break in between case statments to break out of a switch/loop, I also added a default if everything bombs out
//Switch statment.  declared our varible and manipulated it by passing it into the control structure for the condition and passed the varible in the argument parapeter. Insed the switch statment we hace the case statments and the console.log. And a default id everything bombs out. Also put a break statement in between each case statment so it can break out of a switch/loop. Looks much cleaner
switch (fruit) {

    case 'Orange':
        console.log("Oranges are $0.50 a pound");
        break;
    case 'Bananas':
        console.log("Bananas are $0.60 a pound");
        break;
    case 'Avocado':
        console.log("Avocados are $5.00 a pound");
        break;
    case 'Papaya':
        console.log("Papaya are $0.80 a pound");
        break;
    default:
        console.log("Last Resort If All Conditions Fail");
}
///if condition with a nested if condition
//Once password is enterend. The first if statement checks for the password length met, Then it checks it a 2nd time to see if has any spaces and returns -1 if the password is not found,  if no spaces it will work. if the first condition is not met it will run else "password is too short"
const password = prompt("Enter in a new password");
if (password.length >= 6) {
    if (password.indexOf('') ===-1) {
        console.log("Valid Password");
    } else {
        console.log("Password Cant Have Spaces");
    }
} else {
    console.log("Password is too short");
}
//Function header and the name if the function witht the argument parameter with a console.log

function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}
//Called singsong function three times(Do,Re,Mi,Do,Re,Mi,Do,Re,Mi)
singSong()
singSong()
singSong()

//Template literals are enclosed by backticks, this one is inside of the console log (``), they also contain place holders inside imbeded expressions 
//function named greet which passes in boomer 
function greet(firstName) {
    console.log(`Hey There, ${firstName}`)
}
greet('Boomer');

function greet1(firstName,lastName) {
    console.log(`Hey There, ${firstName} ${lastName}`)
}
greet1('Boomer','Sooner');