console.dir(document);
//passing in the document
//Gives the domain of the web page
console.log(document.domain);
//Gives the url of the web page
console.log(document.URL);

// THE DOCUMENT ATTRIBUTE CAN ACCESS DIFFERENT ELEMNTS.

//console.log(document.title);

//console.log(document.doctype);

//console.log(document.head);

//console.log(document.body);

//console.log(document.all);

console.log(document.all(10));
//Called the document.all object called the index and ran the sub function textcontent which lets me change the header, passed in 
document.all(10).textContent = "I just changed the header"

//Can search for different elements inside of the DOM structure, console.log is passing the document function with the forms its going to go thru the tree and find out what each element is and if finds say the form eleemnt from the DOM function it will display the lenth in the console window

//console.log(document.forms);
//Do we have any links?
//console.log(document.links);
//Do we have any images?
//console.log(document.images);

///////////////////////
//GetElementByID
//Console output of the ID and in the argument parameter I have a document.getElementById with another argument parameter where I can pass in the name of the ID
console.log(document.getElementById('header-title'));

//Object variable based on the document function, with a name with document.getElementById and am passing the name of the header title, I now have a actual object called header title, and can pass it into a console log, once the onject is created you can pass it thru argument parameters
let headerTitle = document.getElementById('header-title');
console.log(headerTitle);
//I can call elements and manipulate them once I have the variable
//Called the varibale name and changed it by text content allows me to chnage the header title, It went into the tree, found it and then changed the object
headerTitle.textContent = "Changed the Title again"
headerTitle.innerText = "Hello Changed You Again"
//Called the varible and changed the color 
headerTitle.style.color = "lightpink"

///////////////////////////////////////
//////////GetElementByClassName
//Refrencing by class name inside the tree, declared a varible called var items and got the list group by the class name using a different attribute selcetor 
var items = document.getElementsByClassName('list-group-item')
//Passed in the varible I created with items in the console log
console.log(items);

/////Called the actual index and changed the style and font-weight and text content in a array structure 0-10
items[1].style.backgroundColor = 'pink'
items[1].style.fontWeight = 'bold';
items[1].textContent = "skee wee"
items[1].style.color = 'green'

items[0].style.backgroundColor = 'lightgray'
items[0].style.fontWeight = 'bold';
items[0].textContent = "wassupp"
items[0].style.color = 'white'

items[2].style.backgroundColor = 'lightgreen'
items[2].style.fontWeight = 'bold';
items[2].textContent = "lollll"
items[2].style.color = 'hotpink'

//For loop that incrments all the way to 10, let variable that startes at 1, when you have a list of items use i it stands for interger, and I is greater then 10 an dwill not go past it because it has to be greater than or equal to 10  with increment everytime I go thru each number. And then a output of each number using console.log and pass in the variable I created in the header 
//for (let i =1; i <=10; i++ ) {
//console.log(i);
//}

//Another for loop and in the header i = 1 and i is less then or grater then 20 and everytime I go through the iteration its going to increment by two. passed through the console.
//for (let i=1; i<=20; i+=2) {
    //console.log(i);
//}

//For statement the has the varible let and starts at 100 and then the lenth of items in the array is grater then or equal to zero with the decriment of 2 using minus 
//for (let i =100; i >= 0; i-=2) {
    //console.log(i);
//}
//Array that has a for loop that will iterate through the array (list of items) for loop is manipulating it
//const myDiamonds = ['Snacky','Scary','Lily','IttyBitty','Pinchie','Piggy','Lanky', 'Nibbles','Kibbles'];
//for loop the lets i = 0 and check that the end of the list will continue to loop through and iterate through and increment through the lenth of the diamond list and then a output to the screen 
//for (let i = 0; i < myDiamonds.length; i++) {
   /// console.log(i, myDiamonds[i]);
//}Declared a for loop, put everything in the header declared a varible for the list of items, checked the list of items so it can iterate through, and then after the body of code I increment using i++
//for(var i = 0; i <items.length; i++) {
   // items[i].style.background =  'grey';
    //items[i].textContent = "Changing the List Items"
    //items[i].style.color = 'white';
//}


//////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////GetElementByTagName


//var variable that equals getElementsByTagName amd then the tag name in the parameter, once object is created I used console.log and passed it into the arument parameter which will list out all the elements from the tree listed out in a index format
var li = document.getElementsByTagName('li');
//For line 105 I used the console.log function and called the vairble that was created and passed in the actual index inside the brackets which will return the object of that index and give me all the properties
console.log(li);
console.log(li[1]);
//Manipulating parts of the DOM by caling the variable li and called this index and then the text content property and continued to do that to style that item
li[1].textContent = "Hello 2 Now";
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'green';
li[1].style.color = 'white';

//Created the variable, checked the length of the list and then increment and run the code can call it in the index
for(var i =0; i < li.length; i++) {
//In the body we called the varible li and passed in the varible from the header [i] and then styled the items
li[i].style.backgroundColor = 'lightgrey';
li[i].textContent = "I Changed The Items From the DOM";
li[i].style.color = 'white';

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////Query Selector:
//Created a variable object using the document class, used var with the header with declartion of document.QS () which called the ID main header
//var header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 4px hotpink';
//Variable with the name var input, with the class document query selector and the input which will return the first input inside of the form, and then changed the input for the text value in the input box
//var input = document.querySelector('input');
//input.value = "I just changed the text vlaue in the input box";
//Created a varible called submit and ussed the document.querySelector and in the argument parameter theres input and called the attribute type inside of quotions which creats the varible 
//var submit = document.querySelector('input[type="submit"]')
//SubmitEvent.value = "HELLO BUTTON"
//called the last child of the index it created when it found the entire list of class, it went in the DOM and put into a list from the parent to the last child 
//var lastItem = document.querySelector('.list-group-item:last-child');
//lastItem.style.color = 'blue';
//Going from every other item through the list and the document.QS since im still in the DOM, then called the list group class and then used nth child because I went by 2 for every item in that list. I then called other item to style it.
//var otherItem = document.querySelector('list-group-item:nth-child(2)');
//otherItem.style.color = 'green';

///////////////////////////////////////////////////////////////////////////////////////////////////////QuerySelectorALL
//Obtaied everything that has title in it and then accessed it by its index and passed in the class name by putting a period in the begining I also checked the varible by passing it through a argument parameter
var titles = document.querySelectorAll('.title');
console.log(titles);
//title is zero called the index which put it in a list then put text content which changed the string
titles[0].textContent = "Hello Aisha, I changed the title";
//Created odd and even variable and usin g the query selector and returned the node list of everything that has a line item by li called the element mane nth and called the child function and then passed in odd. I did the same thing for the even variable
var odd = document.querySelectorAll('li:nth-child(Odd)');
var even = document.querySelectorAll('li:nth-child(even)');
//for loop that iterates through the odd list, called the varible i (interger) which begins at 0 so if i is less then the length of the odd list increment it 
for (var i = 0; i< odd.length; i++) {
//Called the varible and the index so for every item in the odd and even list I manipulated the styling by going through every index and changed the attribute sin property styles. 
    odd[i].style.backgroundColor = 'lightpink';
    even[i].style.backgroundColor = 'lightgreen';
    even[i].style.color = 'whitesmoke';
    odd[i].style.color = 'whitesmoke';
}