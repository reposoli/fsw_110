var a = document.createElement('a');  
var link = document.createTextNode("Home");
a.appendChild(link);  
a.href = "http://www.ammosoul.com/ammosoulartillery.html";  
document.body.appendChild(a)

var a = document.createElement('a');  
var link = document.createTextNode("About"); 
a.appendChild(link);  
a.href = "http://www.ammosoul.com/ammosoulfaqs.html";  
document.body.appendChild(a)

var a = document.createElement('a');  
var link = document.createTextNode("Contact"); 
a.appendChild(link);  
a.href = "http://www.ammosoul.com/ammosouldelivery.html";  
document.body.appendChild(a)

var newH1 = document.createElement("h1")
newH1.textContent = "AMMOSOUL"
document.body.append(newH1)

var newP = document.createElement("p")
newP.textContent = "Elderberry Infused Sea Moss gel"
document.body.append(newP)

var newOl = document.createElement("ol")
newOl.textContent = "5 Signature Flavors"
document.body.append(newOl)

var listItem = document.createElement("li")
listItem.textContent = "BluezBerry"
newOl.append(listItem)

var listItem = document.createElement("li")
listItem.textContent = "Applia"
newOl.append(listItem)

var listItem = document.createElement("li")
listItem.textContent = "SouLAmmo"
newOl.append(listItem)

var listItem = document.createElement("li")
listItem.textContent = "Strawbanie"
newOl.append(listItem)

var listItem = document.createElement("li")
listItem.textContent = "MaxBerry"
newOl.append(listItem)

var footer = document.createElement("footer")
footer.textContent = "© 2020 - Stephanie Olivares Footer "
document.body.append(footer)

