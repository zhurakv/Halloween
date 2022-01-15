window.addEventListener("scroll", function () {
	let header = document.querySelector(".header");
	if (scrollY >= 50) {
		header.classList.add("fixed");
	} else {
		header.classList.remove("fixed");
	}
});
window.addEventListener("scroll", function () {
	let scrolltop = document.querySelector(".scroll-up");
	if (scrollY >= 600) {
		scrolltop.classList.add("scroll-active");
	} else {
		scrolltop.classList.remove("scroll-active");
	}
});
ScrollReveal().reveal(".reval", { distance: "-50px", duration: 4000 });
ScrollReveal().reveal(".revalOne", { distance: "-60px", duration: 2500 });
ScrollReveal().reveal(".revalTwo", { distance: "-60px", duration: 3000 });
ScrollReveal().reveal(".revalThree", { distance: "-60px", duration: 3500 });
ScrollReveal().reveal(".revalFore", { distance: "-60px", duration: 4000 });
ScrollReveal().reveal(".revalFife", { distance: "-60px", duration: 4500 });

ScrollReveal().reveal(".reval7", { distance: "-55px", duration: 2500 });
ScrollReveal().reveal(".reval8", { distance: "-55px", duration: 3000 });
ScrollReveal().reveal(".reval9", { distance: "-55px", duration: 3500 });
ScrollReveal().reveal(".reval10", { distance: "-55px", duration: 4000 });
ScrollReveal().reveal(".reval11", { distance: "-55px", duration: 4500 });
ScrollReveal().reveal(".reval12", { distance: "-55px", duration: 5000 });

ScrollReveal({ distance: "50px" });
ScrollReveal().reveal(".revalFive", { origin: "left", duration: 3000 });
ScrollReveal().reveal(".revalSix", { origin: "right", duration: 3000 });

let circle1 = document.querySelector(".li-one");
let circle2 = document.querySelector(".li-two");
let circle3 = document.querySelector(".li-three");
let circle4 = document.querySelector(".li-fore");

if (scrollY <= 600) {
	circle1.classList.add("circle");
} else {
	circle1.classList.remove("circle");
}
window.addEventListener("scroll", function () {
	if (scrollY <= 600) {
		circle1.classList.add("circle");
	} else {
		circle1.classList.remove("circle");
	}
});

window.addEventListener("scroll", function () {
	if (scrollY >= 1250) {
		circle2.classList.add("circle");
	} else {
		circle2.classList.remove("circle");
	}
});

window.addEventListener("scroll", function () {
	if (scrollY >= 1850) {
		circle3.classList.add("circle");
		circle2.classList.remove("circle");
	} else {
		circle3.classList.remove("circle");
	}
});

window.addEventListener("scroll", function () {
	if (scrollY >= 3180) {
		circle4.classList.add("circle");
		circle3.classList.remove("circle");
		circle2.classList.remove("circle");
	} else {
		circle4.classList.remove("circle");
	}
});
window.addEventListener("scroll", function () {
	if (scrollY >= 3780) {
		circle4.classList.remove("circle");
		circle3.classList.remove("circle");
		circle2.classList.remove("circle");
		circle1.classList.remove("circle");
	} else {
		console.log("Sieg Heil");
	}
});