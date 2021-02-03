const navItems = document.querySelectorAll('.nav__items');
const navbar = document.querySelectorAll('.navbar');
const menuIcon = document.querySelectorAll('.nav__menu__icon');

menuIcon[0].addEventListener('click', function(e) {
	if (navItems[0].style.display != 'none') {
		navItems[0].style.display = 'none';
		navbar[0].style.height = '4rem';
	}
	else {
		navItems[0].style.display = 'block';
		navbar[0].style.height = '22rem';
	}
});

console.log('Script loaded');
