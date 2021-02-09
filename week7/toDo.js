var myList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myList[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
  }
}

 //Add "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
  ev.target.classList.toggle('checked');
  }
}, false);

// when clicking on "Add" button - create new item or alert client if no text is input
function newElement() {
  var li = document.createElement("li");
  var newItem = document.getElementById("addedItem").value;
  var t = document.createTextNode(newItem);
  li.appendChild(t);
  if (newItem === '') {
  alert("you must type something");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("addedItem").value = "";

  var span = document.createElement("SPAN");
//'x' button next to delete list item
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
  }
}

//Clear the list
function removeAll(){
  var clearList = document.getElementsByTagName("ul");
    clearList[0].innerHTML = "";
}