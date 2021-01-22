//List of Events - http://www.w3schools.com/jsref/dom_obj_event.asp

// the 'click' event:

/* Often JavaScript functions are created that are run when certain events happen such as a click of the mouse on a certain area or thing.

You will need to attach that event (let's say a mouse click on a button or a mouse over) to an HTML element, or even the entire body of the document.

Here's how you may have seen that done: */

//HTML
<div onclick="myFunction()">click me!</div>

//JS
function myFunction(){
    console.log("You clicked me!");
}


/* Be aware that on methods belong to your element as a property, 
but we will learn another way to add event listeners.

Add an event listener
Select the HTML Element within your JavaScript and set up 
the event listener there with the addEventListener() method. */

//HTML
<div id="this-div">click me!</div>
//JS
document.getElementById("this-div").addEventListener('click', function(){
    console.log("You clicked me!");
})

/* Look back at the JavaScript. How many arguments does addEventListener() take? Two. 
What are each of those arguments? The first one is a string, and the second one 
is an anonymous function.

The addEventListener() method is looking for one of many strings... 
"click", "mouseover", "keypress" and "hover" are a few. 
Here - http://www.w3schools.com/jsref/dom_obj_event.asp - is a list of all the events you could use instead of click but without the 
'addEventListener' part. */


