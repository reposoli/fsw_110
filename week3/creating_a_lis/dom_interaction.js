//2
var newH1 = document.createElement("h1")
newH1.textContent = "Hello World"
document.body.append(newH1)

//3 
for (newH1 = 0; newH1 < 9; newH1 ++) {
    const repH1 = document.createElement("h1");
    repH1.innerHTML = "Hello World";
    repH1.style.color = 'purple';                         //4
    repH1.style.backgroundColor = 'black';
    document.body.appendChild(repH1);
}

//5
const names =  [
    "steve", 
    "larry", 
    "joe", 
    "shirley", 
    "steph", 
    "nate", 
    "rick", 
    "emily"]

var newUl = document.createElement("ul")
newUl.textContent = "List of Names"
document.body.append(newUl)
//6
for (var i = 0; i < names.length; i++) {
    newUl.innerHTML += "<li>" + names[i] + "</li>"
    newUl.style.color = 'red';                        
    newUl.style.backgroundColor = 'lightgray';

}


