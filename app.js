/*mostrar barra de navegacion*/
(()=>{
	const icono = showNavbar.getElementsByClassName('fas')[0];
	const toggleNavbar = e =>{
		navbar.classList.toggle('navbar-active');

		if(icono.classList.contains('fa-bars')){
			icono.classList.replace('fa-bars', 'fa-times');
		}else{
			icono.classList.replace('fa-times', 'fa-bars');
		}
	}
	showNavbar.addEventListener('click', toggleNavbar);
})();

/*Ocultar barra al scroll*/
(()=>{
	let lastScrollPos = window.scrollY;

	const handleScroll = () => {
		if(window.scrollY > lastScrollPos){
			navMain.style.top = '-60px';
		}else{
			navMain.style.top = '0';
		}
		lastScrollPos = window.scrollY;

		if(navbar.classList.contains('navbar-active')){
			showNavbar.click();
		}
	}
	window.addEventListener('scroll', handleScroll);
})();