/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */


var box = document.getElementById("output")
box.textContent = "Key Press question",
document.body.append(box)


document.onkeydown = function () {
    var keyCode = window.event ? window.event.keyCode : event.which;
    keyEvent(keyCode);
}

function keyEvent(keyCode) {

if (keyCode == 65) {
    box.innerHTML = "You Pressed The Letter 'a'. It is KeyCode 65.";
    }
}