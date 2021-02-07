
var pageTitle = document.getElementById("pageTitle")
pageTitle.textContent = "Sign Up For Coupon Codes and Get Your First Code Today!"
pageTitle.classList.add("pageTitle")

var username = document.getElementById("username")
username.textContent = "Create a Username";

var password = document.getElementById("password")
username.textContent = "Create a Password";

var verifyPassword = document.getElementById("verifyPassword")
username.textContent = "Verify Password";

var boxLayout = document.getElementById("boxLayout")
boxLayout.classList.add("boxLayout");

 var button = document.getElementById("btnSubmit");

btnSubmit.classList.add("button");


    function submitForm() {
        // Get the first form with the name
        // Usually the form name is not repeated
        // but duplicate names are possible in HTML
        // Therefore to work around the issue, enforce the correct index
        document.getElementsByName('form')[0];
        form.Submit(); // Submit the form
        form.reset();  // Reset all form data
        return false; // Prevent page refresh
     }


const form = document.form;
if (password.value === verifyPassword.value){

form.addEventListener("Submit", (event) => {
    event.preventDefault()
    alert
    (`
    Your New Username is: ${form.username.value}
    Your New Password is: ${form.password.value}
    Your Code: aMm0sOul
    Use your first coupon code at your next checkout today!`);
    })

}
   
//  var pressedButton = document.getElementsByTagName("button")[0];
//  pressedButton.addEventListener("click",function (event) {
//    alert("Alert")
//  })
  
  

 
  




