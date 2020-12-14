var intro = document.getElementById("intro")
console.log(intro)
console.dir(intro)

var h = document.createElement("h1"); 
var t = document.createTextNode("Selecting Elements");
h.appendChild(t); 
 
document.body.appendChild(h); 
