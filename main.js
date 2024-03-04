// Función constructora para el objeto Prestamo
function Prestamo(monto, tasaInteresAnual, plazoAnios) {
  this.monto = monto;
  this.tasaInteresAnual = tasaInteresAnual;
  this.plazoAnios = plazoAnios;
}

// Método en el prototipo de Prestamo para calcular el pago mensual
Prestamo.prototype.calcularPagoMensual = function() {
  const tasaInteresMensual = this.tasaInteresAnual / 100 / 12;
  const numeroPagos = this.plazoAnios * 12;

  const factor = Math.pow(1 + tasaInteresMensual, numeroPagos);
  return this.monto * tasaInteresMensual * factor / (factor - 1);
};

// Función de bienvenida
function saludar(nombre) {
alert("¡Bienvenido/a " + nombre + "!");
}

// Función para solicitar un número al usuario y no un string
function solicitarNumero(mensaje) {
return parseFloat(prompt(mensaje));
}

// Función principal 
function calcularBalance() {
let nombre = prompt("Ingresa tu nombre:");
saludar(nombre);

let ingresos = solicitarNumero("Ingrese sus ingresos mensuales:");
let gastos = solicitarNumero("Ingrese sus gastos mensuales:");

// Calcular el balance mensual
let balance = ingresos - gastos;

// Mostrar el resultado al usuario
if (balance > 0) {
  let sobrante = balance;
  let ahorro = sobrante * 0.5; // 50% ahorro
  let usoPropio = sobrante * 0.5; // 50% para uso propio
  alert("¡Tienes un saldo positivo este mes!\nTu balance es de: " + balance.toFixed(2) +
    "\nSe ha dividido el sobrante de forma equitativa.\nAhorro: " + ahorro.toFixed(2) +
    "\nUso Propio: " + usoPropio.toFixed(2));
} else if (balance < 0) {
  alert("Tienes un saldo negativo este mes.\nTu balance es de: " + balance.toFixed(2));
} else {
  alert("Tu balance este mes es neutro. No hay excedentes ni faltantes.");
}

// Crear un array para almacenar los préstamos
let prestamos = [];

// Solicitar al usuario información sobre los préstamos
while (confirm("¿Desea ingresar información sobre un préstamo?")) {
  let montoPrestamo = solicitarNumero("Ingrese el monto del préstamo:");
  let tasaInteresAnual = solicitarNumero("Ingrese la tasa de interés anual (%):");
  let plazoAnios = solicitarNumero("Ingrese el plazo del préstamo en años:");

  // Crear un nuevo objeto Prestamo y agregarlo al array
  prestamos.push(new Prestamo(montoPrestamo, tasaInteresAnual, plazoAnios));
}

// Filtrar el préstamo con la tasa de interés más alta
let prestamoTasaAlta = prestamos.reduce((prev, current) => prev.tasaInteresAnual > current.tasaInteresAnual ? prev : current);

// Filtrar los préstamos con una tasa de interés menor al 10%
let prestamosBajaTasa = prestamos.filter(prestamo => prestamo.tasaInteresAnual < 10);

// Mostrar resultados
alert("El préstamo con la tasa de interés más alta es de: " + prestamoTasaAlta.tasaInteresAnual.toFixed(2) + "%");
alert("Los préstamos con una tasa de interés menor al 10% son: " + prestamosBajaTasa.length);
}

// Llamar a la función principal
calcularBalance();