let impuesto = 1.75;
let precioFinal = 0;

// const storedPersona = localStorage.getItem('persona');
// const persona = storedPersona ? JSON.parse(storedPersona) : {
//   nombre: "",
//   apellido: "",
//   edad: "",
// };

const personas = JSON.parse(localStorage.getItem('personas')) || [];

//document.getElementById('nombreInput').value = persona.nombre;
//document.getElementById('apellidoInput').value = persona.apellido;
//document.getElementById('edadInput').value = persona.edad;

const form = document.getElementById('userInfoForm');
const nombreInput = document.getElementById('nombreInput');
const apellidoInput = document.getElementById('apellidoInput');
const edadInput = document.getElementById('edadInput');
const mensageDiv = document.getElementById('mensageDiv');
const precioProductoInput = document.getElementById('precioProductoInput');
const precioFinalDiv = document.getElementById('precioFinalDiv');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if(personas.some(persona => persona.nombre == nombreInput.value && persona.apellido == apellidoInput.value)) {
    mostrarMensaje("Bienvenido otra vez " + nombreInput.value);
  } else {
    const persona = {nombre: nombreInput.value,apellido: apellidoInput.value, edad: edadInput.value} 
    personas.push(persona)
    mostrarMensaje(`Te has registrado ${persona.nombre} ${persona.apellido}`);
    localStorage.setItem('personas', JSON.stringify(personas));
  }
  event.target.reset()
});



function mostrarMensaje(mensaje) {
  mensageDiv.innerHTML = mensaje;
}

const btn = document.getElementById('btnCalcular');

btn.onclick = calcularImpuesto;

function calcularImpuesto() {
  const precioProducto = parseFloat(precioProductoInput.value);
  if (isNaN(precioProducto) || precioProducto <= 0) {
    mostrarMensaje('Ingrese un precio válido para el producto.');
    return;
  }

  precioFinal = precioProducto * impuesto;
  precioFinalDiv.innerHTML = `El precio final del producto es de: ${precioFinal}`;
}