document.getElementById("heading").innerHTML = "Welcome to my JS site";
document.getElementById("paragraph").innerHTML = "All This Was Created With JavaScript";

var newLi = document.createElement("li")
newLi.textContent = "item4 created in javascript"
var myOl = document.getElementById("myOl")
myOl.append(newLi)

var newLi = document.createElement("li")
newLi.textContent = "item5 created in javascript"
var myOl = document.getElementById("myOl")
myOl.append(newLi)

var newLi = document.createElement("li")
newLi.textContent = "item6 created in javascript"
var myOl = document.getElementById("myOl")
myOl.append(newLi)