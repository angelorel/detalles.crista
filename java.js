

	

		


let cajas= new Clientes('cajitas',15,'./img/Ejemplo.png')
 let caja1= new Clientes('cajita',14,'./img/Ejemplo.png')

nuevos.push(caja1,cajas)



	nuevos.forEach((Clientes) => {
estruct = `<div class="caja"><h2>${Clientes.nombre}</h2>
	  	     <img src="${Clientes.foto}">
	  		     <h3 class="precio">Precio: $ 
	  			<span id="precios"> ${Clientes.precio}
	  			</span> </h3> <a href="#"class="boton">ME INTERESA</a>
	  </div>`

poner.innerHTML += estruct


})
	



	function ini(){
let disable = document.getElementById('inicio');
		disable.style.display=""
		let noview = document.getElementById('detalles');
		noview.style.display="none"
		let angel = document.getElementById('aserca_de');
		angel.style.display="none"
        let local = document.getElementById('tipos');
		local.style.display="none"
		let dispon1 = document.getElementById('dispon');
		dispon1.style.display="none"
		let iniciando = document.getElementById('contenedor');
		iniciando.style.display="none"
		
		  

			  let cua = document.getElementById('cuadro');
		cua.style.display=""
		 let lav = document.getElementById('cuad');
		lav.style.display=""







	}
	function det(){
		let disable = document.getElementById('inicio');
		disable.style.display="none"
		let noview = document.getElementById('detalles');
		noview.style.display=""
		let angel = document.getElementById('aserca_de');
		angel.style.display="none"
        let local = document.getElementById('tipos');
		local.style.display="none"
		let dispon1 = document.getElementById('dispon');
		dispon1.style.display="none"
	}


function aserca_de(){
		let disable = document.getElementById('inicio');
		disable.style.display="none"
		let noview = document.getElementById('detalles');
		noview.style.display="none"
		let angel = document.getElementById('aserca_de');
		angel.style.display=""
        let local = document.getElementById('tipos');
		local.style.display="none"
		let dispon1 = document.getElementById('dispon');
		dispon1.style.display="none"
	}
	function tipo(){
		let disable = document.getElementById('inicio');
		disable.style.display="none"
		let noview = document.getElementById('detalles');
		noview.style.display="none"
		let angel = document.getElementById('aserca_de');
		angel.style.display="none"
        let tip = document.getElementById('tipos');
        tip.style.display=""
        

		let dispon1 = document.getElementById('dispon');
		dispon1.style.display="none"

	}
	
	
	
	function dispo(){
		let disable = document.getElementById('inicio');
		disable.style.display="none"
		let noview = document.getElementById('detalles');
		noview.style.display="none"
		let angel = document.getElementById('aserca_de');
		angel.style.display="none"
        let local = document.getElementById('tipos');
		local.style.display="none"
		let dispon1 = document.getElementById('dispon');
		dispon1.style.display=""//desactivado
	}


// copiar correo
const copyButton = document.querySelector('#copy-button');
const textToCopy = 'cristabelaabelar@gmail.com';

copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      console.log('Texto copiado al portapapeles!');
    })
    .catch((err) => {
      console.error('Error al copiar texto: ', err);
    });
});