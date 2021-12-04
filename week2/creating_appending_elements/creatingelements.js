var newH1 = document.createElement("h1")
newH1.textContent = "Welcome to my JS site"
document.body.append(newH1)

var newP = document.createElement("p")
newP.textContent = "All of this was created with Javascript"
document.body.append(newP)

var newOl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var li5 = document.createElement("li");

newOl.textContent = "An Ordered List in JS"
li1.textContent = "Item One"
li2.textContent = "Item Two"
li3.textContent = "Item Three"
li4.textContent = "Item Four"
li5.textContent = "Item Five"

newOl.appendChild(li1)
newOl.appendChild(li2)
newOl.appendChild(li3)
newOl.appendChild(li4)
newOl.appendChild(li5)


document.body.append(newOl)