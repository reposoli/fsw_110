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
var newOl = document.createElement("ol")
newOl.textContent = ["Steve", " Larry", " Joe", " Shirley", " Steph"," Nate"," Rick"," Emily"]
document.body.append(newOl)

//6
for (newOl = 0; newOl < 1; newOl ++) {
    const names = document.createElement("li");
    names.innerHTML = ["Steve", " Larry", " Joe", " Shirley", " Steph"," Nate"," Rick"," Emily"];
    
    document.body.appendChild(names);
}

