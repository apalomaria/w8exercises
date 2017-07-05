//EXERCISE 1. - print to console, the screen and an alert
// Print to console
console.log("Hello World");
// print to screen
document.write("Hello World");
//displaying an alert pop up on the screen
alert("POP UP TEXT DISPLAYED HERE")

//EXERCISE 2. - save users data in a variable using a prompt
//'Whats your name' is the text displayed in the alert pop up box.
//'username' is the "name" of the function it's asking
var username=prompt("Whats your name?");
//the text entered will stored in console
  console.log(username);

//EXERCISE3. - Create the 4 different types of variables
// VARIABLES ARE USED TO STORE DATA. MOST COMMON ARE THE FOUR TYPES
var exOne = 100; //Numbers - does not have quotations
var exTwo = "set of text are strings"; //Strings - set of text displayed in quotations marks
var exThree = false; //Booleans - true or false (no quotations); often used for if/else statements
var exFour = ["collection", "of","stuff"];//Arrays - collection of variables, must use brackets and commas

//EXERCISE 4. - Using concatenation with your variables
//concatenation is combining things in Javscript - below displays what will display when combining exOne, exTwo and exFour.
var combinedStrings = exOne + exTwo + exFour;
  console.log(combinedStrings); //following will display in console = 100set of text are stringscollection,of,strings

//EXERCISE 5. - Write if/else statements using variables in the condition and in the block of code that runs
var num1 = 10;
var num2 = 20;
var num3 = 100;

if (num2 > 10){//if the number in num2 (20) is greater than 10 THEN display the bottom in console
  console.log("Correct, it's greater");
} else { // if the num2 (20) is NOT greater than 10 THEN bottom displays in console - inorder to display this message change var num2 to number 10 or less
  console.log("It is not greater than 10");
}

//EXERCISE 6. - create loops that pring array indexes and values
var array1 = [1, 3, 5, 7, 9];
var total =0

for (var i=0; i<array1.length; i++){
  total= total + array1[i];
};
  console.log(total);

/*for(var i=0, i< 20; i=i+1){ //NOT WORKING error on < sign
  console.log(i);
};*/

//EXERCISE 7. - Creat function that have parameters and run with arguemnts
function testStuff2(c, d){
  if(c== 25) {
    console.log(c + " is equal to 25");
  } else if (d <= 100){
    console.log(d + " is less than or equal to 100");
  } else {
    console.log("Neither if or else if statement ran");
  };
};

testStuff2(10, 101);
testStuff2(26, 99);
testStuff2(100, 25);
