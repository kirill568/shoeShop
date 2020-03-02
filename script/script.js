let burger = document.querySelector(".burger");
let menu = document.querySelector(".navMenu");
let buttonClose = document.querySelector(".menuCloseSmallDisplay");


function isMobileDevice(width) {
	console.log(width);
	if (width <= 850) {
		return true;
	}
	return false;
}

function prepareMenuBigDispalay() {
	buttonClose.classList.remove("menuCloseSmallDisplayActive");
	menu.classList.remove("navMenuSmallDisplay");
	menu.classList.add("navMenuBigDisplay");
}

function prepareMenuSmallDisplay() {
	menu.classList.remove("navMenuBigDisplay");
	menu.classList.add("navMenuSmallDisplay");
}

function closeMenuMobile() {
	menu.classList.remove("navMenuSmallDisplayActive");
}

function showMenuMobile() {
	menu.classList.add("navMenuSmallDisplayActive");
	buttonClose.classList.add("menuCloseSmallDisplayActive");
}

function showMenuDescktop() {
	if (burger.classList.contains("burgerActive")) {
		burger.classList.remove("burgerActive");
	}
	if (menu.classList.contains("navMenuBigDisplayActive")) {
		menu.classList.remove("navMenuBigDisplayActive");
		return;
	}
	burger.classList.add("burgerActive");
	menu.classList.add("navMenuBigDisplayActive");
}

function showMenu() {
	let width = window.innerWidth;
	if(isMobileDevice(width)) {
		showMenuMobile();
	} else {
		showMenuDescktop();
	}
}

if (window.innerWidth <= 850) {
	prepareMenuSmallDisplay();
}

burger.addEventListener("click", function(event) {
	showMenu();
});

buttonClose.addEventListener("click", function(event) {
	closeMenuMobile();
});

window.addEventListener('resize',function(){
    if (isMobileDevice(window.innerWidth)) {
    	return prepareMenuSmallDisplay();
    }
    prepareMenuBigDispalay();
});
