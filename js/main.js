setInterval(updateClock, 1000);

let secsDiv = document.getElementsByClassName("second-hand");
let minsDiv = document.getElementsByClassName("min-hand");
let hourDiv = document.getElementsByClassName("hour-hand");

function updateClock() {

	let now = getCurrentDate();
	let seconds = now.getSeconds();
	let minutes = now.getMinutes();
	let hour = now.getHours();


	let secondsDeg = ((seconds/60) *360) + 90;
	let minsDeg = ((minutes/60) *360) + 90;
	let hourDeg = ((hour/12) * 360) + 90;

	secsDiv[0].style.transform = 'rotate(' + secondsDeg + 'deg)';
	minsDiv[0].style.transform = 'rotate(' + minsDeg +'deg)';
	hourDiv[0].style.transform = 'rotate(' + hourDeg +'deg)';


}

function getCurrentDate() {
	return new Date();
}