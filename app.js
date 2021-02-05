const navItems = document.querySelectorAll('.nav__items');
const navbar = document.querySelectorAll('.navbar');
const menuIcon = document.querySelectorAll('.nav__menu__icon');

var x = window.matchMedia('(min-width: 992px)');

const cross = document.getElementById('cross');
const menu = document.getElementById('menu');
const menuContainer = document.getElementById('menu__icon__container');

const exp = document.getElementById('exp');
const edu = document.getElementById('edu');
const eduSec = document.getElementById('edu__sec');
const expSec = document.getElementById('exp__sec');
const expEduSec = document.getElementById('expEduSec');

edu.addEventListener('click', function(e) {
	e.preventDefault();
	// console.log('clicked');
	eduSec.classList.add('show');
	expSec.classList.add('hide');
	expSec.classList.remove('show');
	eduSec.classList.remove('hide');
	edu.classList.add('btn--white');
	exp.classList.remove('btn--white');
	expEduSec.classList.remove('remove__line');
});

exp.addEventListener('click', function(e) {
	e.preventDefault();
	// console.log('clicked');
	eduSec.classList.add('hide');
	expSec.classList.add('show');
	expSec.classList.remove('hide');
	eduSec.classList.remove('show');
	edu.classList.remove('btn--white');
	exp.classList.add('btn--white');
	expEduSec.classList.add('remove__line');
});
menuIcon[0].addEventListener('click', function(e) {
	console.log('works');
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
}

console.log('Script loaded');
