// to create the list of note
function newNote() {
  var li = document.createElement("li");
  var screenvalue = document.getElementById("note").value;
  var nt = document.createTextNode(screenvalue);
  var k;
  li.appendChild(nt);
  if (screenvalue == "") {
    alert("BLOCK IS EMPTY !!");
  } else {
    document.getElementById("Nnote").appendChild(li);
  }
  document.getElementById("note").value = "";

  var span = document.createElement("SPAN");
  var text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);

  for (k = 0; k < close.length; k++) {
    close[k].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// close button to add in list
var listofnode = document.getElementsByTagName("li");
var k;
for (k = 0; k < listofnode.length; k++) {
  var span = document.createElement("SPAN");
  var text = document.createTextNode("\u00D7");
  span.className = "delete";
  span.appendChild(text);
  listofnode[k].appendChild(span);
}

// right check button
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// deleting botton
var close = document.getElementsByClassName("close");
var k;
for (k = 0; k < close.length; k++) {
  close[k].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}


