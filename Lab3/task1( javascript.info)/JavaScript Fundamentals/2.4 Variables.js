let message;
message = 'Hello!';
alert(message); // shows the variable content


let user = 'John';
let age = 25;
var text = 'Hello';
alert(text);
//The var keyword is almost the same as let


let hello = 'Hello world!';
let messages;

// copy 'Hello world' from hello into message
messages = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(messages); // Hello world!

// let message = "This";
//repeated 'let' leads to an error
// let message = "That"; // SyntaxError: 'message' has already been declared


//Examples of valid names:
let userName;
let test123;
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3

//Examples of incorrect variable names:
//let 1a; // cannot start with a digit
//let my-name; // hyphens '-' aren't allowed in the name


//Case matters
//Variables named apple and APPLE are two different variables.


//Constants
const myBirthday = '18.04.1982';
myBirthday = '01.01.2001'; // error, can't reassign the constant!

//Uppercase constants
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00