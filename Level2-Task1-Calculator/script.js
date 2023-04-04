let screen = document.querySelector("#scrn");
let btn = document.querySelectorAll(".btn");

//making buttons active to take input
for (item of btn) {
  item.addEventListener("click", (e) => {
    button = e.target.innerText;

    if (button == "÷") {
      button = "/";
    }

    if (button == "×") {
      button = "*";
    }
    screen.value += button;
  });
}

//to calculate result
function result() {
  if (screen.value == "") {
    alert("Please ENTER THE NUMBER FIRST\nPress AC");
  }
  screen.value = eval(screen.value);
}
//function for calculating factorial factoriral
function fact() {
  let n = screen.value;
  let f = 1;
  for (let i = 1; i <= n; i++) {
    f = f * i;
  }

  screen.value = f;
}

function sin() {
  var final = (screen.value * 3.141592653589793238) / 180;

  screen.value = Math.sin(final);
}
function cos() {
  var final = (screen.value * 3.141592653589793238) / 180;

  screen.value = Math.cos(final);
}

function log() {
  screen.value = Math.log(screen.value);
}
function tan() {
  screen.value = Math.tan(screen.value);
}
function squr() {
  screen.value = Math.pow(screen.value, 2);
}
function qube() {
  screen.value = Math.pow(screen.value, 3);
}
function pow() {
  screen.value = Math.pow(10, screen.value);
}

function sqrt() {
  screen.value = Math.sqrt(screen.value);
}

function backspc() {
  screen.value = screen.value.slice(0, -1);
}