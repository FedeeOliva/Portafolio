"use strict";
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
		if(!navbar.classList.contains('navbar-active')){
			if(window.scrollY > lastScrollPos){
				navMain.style.top = '-60px';
			}else{
				navMain.style.top = '0';
			}
			lastScrollPos = window.scrollY;
		}
	}
	window.addEventListener('scroll', handleScroll);
})();

/*Smooth Scroll*/
(()=>{
	const smoothScroll = e => {
		e.preventDefault();
		let target = e.currentTarget.getAttribute('href');		      
		document.querySelector(target).scrollIntoView({
		  behavior: 'smooth'
		});

		if(navbar.classList.contains('navbar-active'))
			showNavbar.click();

	}
	let buttons = document.querySelectorAll('.navbar-link');	

	buttons.forEach( button => {
	    button.addEventListener('click', smoothScroll);
	});
	saberMas.addEventListener('click', smoothScroll);

})();

/*Formulario*/
(() =>{
	email.addEventListener('invalid', () => {
		console.log('mail invalido')
		email.setCustomValidity("Ingrese una correo válido");
	});
	mensaje.addEventListener('invalid', () => {
		mensaje.setCustomValidity("Este campo no puede estar vacio");
	});

	const handleValid = e =>{
		e.target.setCustomValidity("");
	}

	const handleSubmit = e => {
		e.preventDefault();

		const data = {
			nombre: e.target[0].value,
			apellido: e.target[1].value,
			email: e.target[2].value,
			mensaje: e.target[3].value,
		}

		fetch('https://portfoliofedeoliva.herokuapp.com/email', {
			method: 'POST',
			body: JSON.stringify(data),
			mode: 'cors',
			headers: {
      			'Content-Type': 'application/json',
      			'Access-Control-Allow-Origin': '*'

    		},
		})
		.then( response => console.log(response))
		.catch( error => console.log(error));
	}

	formulario.addEventListener('submit', handleSubmit);	
	formulario.addEventListener('input', handleValid);
})();