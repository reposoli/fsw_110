var baddiesBox = document.getElementById("baddiesBox")
baddiesBox.classList.add("baddiesBox");

var list = document.getElementById("list")
list.classList.add("list")

var mario = document.getElementById("mario")
mario.textContent = "Mario Pest Control"

const add = document.getElementById("button")
 add.onclick = function (){
 
    var goombas = document.getElementById("num1").value
    var bobombs = document.getElementById("num2").value
    var cheepcheeps = document.getElementById("num3").value

    var result = document.getElementById("result")
    result.textContent = ((goombas * 5) + (bobombs * 7) + (cheepcheeps * 11))
}

button.classList.add();



