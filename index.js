let impuesto = 1.75;

let nombre = prompt("Ingrese su nombre: ");

while (nombre == '') {
    alert("El nombre no es correcto");
    nombre = prompt("Por favor ingrese nuevamente su nombre");
};
console.log(nombre);

let apellido = prompt("Ingrese su apellido: ");
while (apellido == ''){
    alert("El apellido no es correcto");
    apellido = prompt("Por favor ingrese nuevamente su apellido");
};
console.log(apellido);

alert("Bienvenido "+ nombre +" "+ apellido);

let precio = prompt("Ingrese el valor del producto que va a adquirir para calcular los impuestos aplicados: ");
console.log(precio);
while (precio == ''){
    precio = prompt("El formato de precio que ha ingresado no es correcto, o no ingreso nada, intentelo de nuevo");
};
let precioFinal = precio*impuesto;
console.log(precioFinal);
alert("El precio final del producto a adquirir es de $"+ precioFinal );