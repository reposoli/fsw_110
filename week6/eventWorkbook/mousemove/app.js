var box = document.querySelector(".red-box");
document.body.addEventListener("mousemove", function(event){
    box.innerHTML = "X axis: " + event.x + " Y axis: " + event.y;
});