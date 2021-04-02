"use strict";
/*mostrar barra de navegacion*/
{
	const icono = showNavbar.querySelector('i')
	const toggleNavbar = e =>{
		navbar.classList.toggle('navbar-active');

		if(icono.classList.contains('fa-bars')){
			icono.classList.replace('fa-bars', 'fa-times');
		}else{
			icono.classList.replace('fa-times', 'fa-bars');
		}
	}
	showNavbar.addEventListener('click', toggleNavbar);
}

/*Ocultar barra al scroll*/
{
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
}

/*Smooth Scroll*/
{
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

}

/*Formulario*/
{
	email.addEventListener('invalid', () => {
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
			headers: {
      			'Content-Type': 'application/json',
    		},
		})
		.then( response => {
			swal("Email enviado correctamente", 
			"Me contactaré contigo pronto", "success")
		})
		.catch( error => {
			swal("Error en el envío", 
			"Algo ha fallado :(", "error")
		});
		e.target.reset();
	}

	document.getElementById('formulario').addEventListener('submit', handleSubmit);	
	document.getElementById('formulario').addEventListener('input', handleValid);
}