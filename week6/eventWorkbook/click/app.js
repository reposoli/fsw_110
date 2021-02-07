// make the box disapear when the user clicks it
var box = document.getElementById("red-box")
box.classList.add("red-box");
document.body.append(box)

box.addEventListener("click", function() {
    box.style.display = "none"
})
