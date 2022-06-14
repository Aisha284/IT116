console.log('HELLO WORLD');
//Created the let varible randomNumber and used the Math.random function and everythime I run the JS code its gonna give me back a random number between 0.0 and 1 
let randomNumber = Math.random(); //0.0-1
////if condtion with a block of code in this case the console.g with a string if its greater then 0.5
// if (randomNumber < 0.50) {

   // console.log("Condition was Met");
   // console.log(randomNumber);

//}
//if condtion with random number greater then or = to 0.5 which is a operator and inside the {} I have the console log where I passed in the varible I created 
// if (randomNumber >= 0.5) {
    
//console.log('Condtion Was Met');
//console.log(randomNumber);

//}
//Created a string varible where I am passing them into multiple contions and if they do not much it does not run code till whatever is in the argument parameter CALLED A IF ELSE CONDITON 
//const dyOfWeek = 'Saturday';


//if (dayOfWeek === 'Monday'){

   // console.log("yay its Monday!");
//} else if (dayOfWeek === 'Friday') {

   // console.log("Yay Its Friday");

//}else if (dayOfWeek === 'Saturday') {

    //console.log("You have the correct Day from the variable");
// }
//Application that takes in a number and whatever that number is it will run through a number of if condtions and which ever the condtions matched it will show a output
//const age = prompt ("Enter An Age");
//Created a varible with a if condition, with condtions (age) is less then any of the numbers in the else if statment it will run the code inside the block
//if (age <5) {

  //  console.log("Hey, You're a baby!");
//else if statement that runs whats in this block
//} else if(age < 10) {
//else if statment that runs whats in this block
   // console.log("Hey, you're just a kid!");
//} else if (age < 35) {
//else if statment that runs whats in this block
   // console.log("You're getting older.");
//}
//IF ALL OTHER CONDTIONS FALL -- ELSE. 
//else {

    //console.log("you're over the age of 35.");
// }
//Cleaner case statments, put break stat, inbetween case state, inorder to break out of switch/loop and I added a default incase all of them fail
const fruit = 'Papayas';
//Switch statment.  declared our varible and manipulated it by passing it into the control structure for the condition and passed the varible in the argument parapeter. Insed the switch statment we hace the case statments and the console.log. And a default id everything bombs out. Also put a break statement in between each case statment so it can break out of a switch/loop. Looks much cleaner
switch (fruit) {

    case 'Orange':
        console.log("Oranges are $0.50 a pound");
        break;
    case 'Bananas':
        console.log("Bananas are $0.60 a pound");
        break;
    case 'Avocado':
        console.log("Avocados are Expensive");
        break;
    case 'Papaya':
        console.log("Papaya are $0.70 a pound");
        break;
    default:
        console.log("Last Resort If All Conditions Fail");
}