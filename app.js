const navItems = document.querySelectorAll('.nav__items');
const navbar = document.querySelectorAll('.navbar');
const menuIcon = document.querySelectorAll('.nav__menu__icon');
var x = window.matchMedia('(min-width: 992px)');

menuIcon[0].addEventListener('click', function(e) {
	if (x.matches) {
		navbar[0].style.height = '4rem';
		navItems[0].style.display = 'flex';
	}
	else {
		if (navItems[0].style.display != 'none') {
			navItems[0].style.display = 'none';
			navbar[0].style.height = '4rem';
		}
		else {
			navItems[0].style.display = 'flex';
			navbar[0].style.height = '22rem';
		}
	}
});

if (x.matches) {
	// location.reload();
	window.onscroll = () => {
		console.log('Here');
		if (this.scrollY == 0) {
			navbar[0].style.backgroundColor = 'transparent';
		}
		if (this.scrollY >= 50) {
			navbar[0].style.backgroundColor = '#222';
		}
		else {
			navbar[0].style.backgroundColor = 'transparent';
		}
	};
}

function myFunction() {
	location.reload();
	// if (window.outerWidth >= 768) {
	// 	console.log('big');
	// 	window.onscroll = () => {
	// 		console.log('Here');
	// 		if (this.scrollY == 0) {
	// 			navbar[0].style.backgroundColor = 'transparent';
	// 		}
	// 		if (this.scrollY >= 50) {
	// 			navbar[0].style.backgroundColor = '#222';
	// 		}
	// 		else {
	// 			navbar[0].style.backgroundColor = 'transparent';
	// 		}
	// 	};
	// }
	// else {
	// 	console.log('small');
	// 	navbar[0].style.backgroundColor = '#222';
	// }
}

console.log('Script loaded');
