
var addButton = document.getElementById('addButton')

addButton.addEventListener("click", function() {
    var h1 = document.getElementById('addResult')
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value
    h1.textContent = "The Result is " + (Number(num1) + Number(num2))
})

var subButton = document.getElementById('subButton')

subButton.addEventListener("click", function() {
    var h1 = document.getElementById('subResult')
    var num1 = document.getElementById('num3').value
    var num2 = document.getElementById('num4').value
    h1.textContent = "The Result is " + (Number(num1) - Number(num2))
})

var mulButton = document.getElementById('mulButton')

mulButton.addEventListener("click", function() {
    var h1 = document.getElementById('mulResult')
    var num1 = document.getElementById('num5').value
    var num2 = document.getElementById('num6').value
    h1.textContent = "The Result is " + (Number(num1) * Number(num2))
})