let impuesto = 1.75;
precioFinal= 0;

function calcularImpuesto() {
    precioFinal = precio*impuesto;
    alert("El precio final del producto es de: " + precioFinal);
    return precioFinal;
}
const persona = {
    nombre: " ",
    apellido: " ",
    edad: " ",
};
persona.nombre = prompt("Ingrese su nombre: ");

while (persona.nombre == '') {
    alert("El nombre no es correcto");
    persona.nombre = prompt("Por favor ingrese nuevamente su nombre");
};
console.log(persona.nombre);

persona.apellido = prompt("Ingrese su apellido: ");
while (persona.apellido == ''){
    alert("El apellido no es correcto");
    persona.apellido = prompt("Por favor ingrese nuevamente su apellido");
};
console.log(persona.apellido);

persona.edad = prompt("Ingrese su edad: ");
while (persona.edad <= 15){
    alert("El sitio solo puede ser accedido por personas mayores a 16 años");
    persona.edad = prompt("Por favor ingrese una edad valida");
};

alert("Bienvenido "+ persona.nombre +" "+ persona.apellido);

let precio = prompt("Ingrese el valor del producto que va a adquirir para calcular los impuestos aplicados: ");
console.log(precio);
while (precio == ''){
    precio = prompt("El formato de precio que ha ingresado no es correcto, o no ingreso nada, intentelo de nuevo");
};

calcularImpuesto(precioFinal);
