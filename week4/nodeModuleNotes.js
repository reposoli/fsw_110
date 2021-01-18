/* By require-ing the readline-sync module, we're able to use all has built in! */

var readline = require("readline-sync");
var name = readline.question("Please type your name: ");

/* module is a global Node.js object that contains properties with 
some information about any given JavaScript file. It has properties like 
__dirname, which is a path to the directory that the file is in, and 
__filename which is the filename itself.

One of the properties on the module object is called exports. 
exports begins as an empty object, and is just sitting there waiting 
for us to put our code on it so that it can be pulled in by a require() 
function call somewhere else. This is how that looks in code: */

// greeting.js
function greeting() {
    console.log("Hello there!");
}

module.exports = greeting;

/* We set the module.exports object on this file to be a function expression 
(the code of the function itself, without actually calling it). 
Now we can require this simple module from anywhere we want! 
Assuming we have another file (let's call it app.js) that's in the same directory as 
greeting.js, we can now do: */

// app.js
var greeting = require("./greeting.js");
greeting(); // "Hello there!" prints to the console.


/* Because you'll almost exclusively be using modules that come from JavaScript files, 
you can actually leave out the .js on the module name: */

var greeting = require("./greeting");


//Node Module Basics - 5 Common Patterns
//****** 1. Set module.exports equal to a function

//Example 1 - exporting an anonymous function expression:
// greet1.js
module.exports = function() {
    console.log("Hello world");
}
// app.js
const greet = require("./greet1");
greet();
//Example 2 - exporting a named function:
// greet1.js
function greeting() {
    console.log("Hello world");
}
// notice we don't execute the function, but just pass it as a variable
module.exports = greeting;  // NOT greeting()
// app.js
const greet = require("./greet1");
greet();


//******* 2. Add function expressions as properties on module.exports

// greet2.js
module.exports.greet = function() {
    console.log("Hello world!");
}

// app.js
// Either do:
var greet2 = require("./greet2"); // Returns module.exports, which contains a "greet" property on it
greet2.greet();
// Or:
var greet2 = require("./greet2").greet; // Returns just the greet property of module.exports
greet2();


//****** 3. Set module.exports to an object of your own with its own properties
/* This pattern is also known as the "Revealing Module Pattern" because it allows 
you to expose only the things you want to expose in your module. You may decide to 
run a bunch of logic, have helper functions, etc. all to come to a final result, and 
then only expose that final result when the require() function is run.*/

// greet3.js
var greeting = "Hello world!!!!";

function greet() {
    console.log(greeting);
}

// Replace module.exports object with my own object that just contains the one
// function. Even though I'm only exposing the one greet function, it still has
// access to all the other functions, login, variables, etc. within this file.
// This way, I can make it so I'm only exposing that which I want to expose
// when require() is called.
module.exports = {
    greet: greet
}


// app.js
var greet3 = require("./greet3");
greet3.greet();

//****** 4. Set module.exports equal to a function constructor 
// greet4.js
function Greetr() {
    this.greeting = "Hello world!!!";
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greetr;

// app.js
var Greet4 = require("./greet4");
var greetr = new Greet4();
greetr.greet();

/* There is no "right" or "wrong" way to structure your modules, 
it's all about using the right tool for the job. 
You need to make sure the structure makes sense for what you're wanting 
to use it for, and gaining that understanding will come with time. For now, 
play around with different module styles and see which ones make the 
most sense to you. */













