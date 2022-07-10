// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


let countDownDate = new Date("Aug 20 2022 00:49:00").getTime();
let x = setInterval(function () {
	let now = new Date().getTime();
	let distance = countDownDate - now;

	let days = Math.floor(distance / (1000 * 60 * 60 * 24))
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000)

	document.querySelector('.timer-discount-locker__days').innerHTML = days
	document.querySelector('.timer-discount-locker__hours').innerHTML = hours
	document.querySelector('.timer-discount-locker__minutes').innerHTML = minutes
	document.querySelector('.timer-discount-locker__seconds').innerHTML = seconds

	if (distance < 0) {
		clearInterval(x)
		document.querySelector('.timer-discount-locker__days').innerHTML = 0
		document.querySelector('.timer-discount-locker__hours').innerHTML = 0
		document.querySelector('.timer-discount-locker__minutes').innerHTML = 0
		document.querySelector('.timer-discount-locker__seconds').innerHTML = 0
		document.querySelector('.timer-discount-locker').nextElementSibling.innerHTML = "Dicount is over"
	}
}, 1000);

const contactForm = document.querySelector('.form-contact');
const sendFormBtn = document.querySelector('.form-contact__button');

if (contactForm) {
	sendFormBtn.addEventListener('click', (e) => {
		e.preventDefault();
	})
}