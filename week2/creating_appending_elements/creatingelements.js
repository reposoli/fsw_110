var newH1 = document.createElement("h1")
newH1.textContent = "Welcome to my JS site"
document.body.append(newH1)

var newP = document.createElement("p")
newP.textContent = "All of this was created with Javascript"
document.body.append(newP)

var newOl = document.createElement("ol")
newOl.textContent = "An Ordered List in JS"
document.body.append(newOl)

var listItem = document.createElement("li")
listItem.textContent = "Item One"
newOl.append(listItem)

var listItem = document.createElement("li")
listItem.textContent = "Item Two"
newOl.append(listItem)

var listItem = document.createElement("li")
listItem.textContent = "Item Three"
newOl.append(listItem)

var listItem = document.createElement("li")
listItem.textContent = "Item Four"
newOl.append(listItem)

var listItem = document.createElement("li")
listItem.textContent = "Item Five"
newOl.append(listItem)

