var body = document.getElementById("gradient");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var css = document.querySelector("h3");

//create Random button
var btn = document.createElement("button");
var txt = document.createTextNode("Random");
btn.className = "random";
btn.appendChild(txt);
body.appendChild(btn);

// Run the function so that the default input colors matches the background
setGradient();

function setGradient(){
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

//Function that generates a random number( between 0 and 255
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//Function that converts the random rgb number to hex
function rgbToHex() { 
  var hex = getRandomInt(0, 256).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};

// Function that creates the final hex number by combining 
// 3 random rgbToHex values

function randomColorNo() {
	var randomC = "#" + rgbToHex()
    + rgbToHex()
    + rgbToHex();
return randomC;
}

//function to set a random gradient when the button is clicked
function setGradientRandom() {
	color1.value = randomColorNo();
	color2.value = randomColorNo();
	setGradient()
} 

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", setGradientRandom);
