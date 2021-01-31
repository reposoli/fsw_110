
var pageTitle = document.getElementById("pageTitle")
pageTitle.textContent = "Sign Up For Coupon Codes and Get Your First Code Today!"
pageTitle.classList.add("pageTitle")

var username = document.getElementById("username")
username.textContent = "Create a Username";

var username = document.getElementById("password")
username.textContent = "Create a Password";

var username = document.getElementById("verifyPassword")
username.textContent = "Verify Password";

var boxLayout = document.getElementById("boxLayout")
boxLayout.classList.add("boxLayout");

 var button = document.getElementById("button");

button.classList.add("button");



const form = document.form;

form.addEventListener("submit", (event) => {
    event.preventDefault()
    alert
    (`
    Your New Username is: ${form.username.value}
    Your New Password is: ${form.password.value}
    Your Code: aMm0sOul
    Use your first coupon code at your next checkout today!`);
    })


   
//  var pressedButton = document.getElementsByTagName("button")[0];
//  pressedButton.addEventListener("click",function (event) {
//    alert("Alert")
//  })
  
  

 
  




