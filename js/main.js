var button = document.querySelector("#generate");
var gradientCode = document.querySelector("#gradient");

function generate() {
  console.log("Called");
  var color1 = document.querySelector("#color1").value;
  var color2 = document.querySelector("#color2").value;
  var angle = document.querySelector('input[name="angle"]:checked').value;

  console.log(`${color1}`);

  document.querySelector(
    "body"
  ).style.backgroundImage = `linear-gradient(${angle}, ${color1}, ${color2})`;

  gradientCode.innerHTML = `linear-gradient(${angle}, ${color1}, ${color2})`;
}

button.addEventListener("click", generate);
