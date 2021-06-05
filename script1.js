let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let css= document.querySelector('h3');
let body = document.getElementById('Gradient');
let randombutton = document.querySelector('.button');

 function getRandomcolor1(){
 	let letters= '0123456789ABCDEF';
 	let color_a ='#';
 	for(let i=0; i<6; i++){
 		color_a = color_a + letters[Math.floor(Math.random()*16)];
 		// body.style.background = color;	
 	}
 	return color_a
 }
 
  function getRandomcolor2(){
 	let letters= '0123456789ABCDEF';
 	let color_b ='#';
 	for(let i=0; i<6; i++){
 		color_b = color_b + letters[Math.floor(Math.random()*16)];
 		// body.style.background = color;
 	}
 	return color_b
 }
 
function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";"; 
 }

function Randomgradientgenerator(){
	color1.value = getRandomcolor1();
	color2.value = getRandomcolor2();

	setGradient();
}

randombutton.addEventListener("click",Randomgradientgenerator);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
