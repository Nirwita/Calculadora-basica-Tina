function sumar() {
  // Cogemos los valores de los dos inputs
  let numero1 = document.getElementById("numero1").value;
  let numero2 = document.getElementById("numero2").value;

  // Convertimos los valores a números
  numero1 = Number(numero1);
  numero2 = Number(numero2);

  // Hacemos la suma
  let resultado = numero1 + numero2;

  // Mostramos el resultado
  document.getElementById("resultado").innerHTML = resultado;
}

function restar() {
  // Cogemos los valores de los dos inputs
  let numero1 = document.getElementById("numero1").value;
  let numero2 = document.getElementById("numero2").value;

  // Convertimos los valores a números
  numero1 = Number(numero1);
  numero2 = Number(numero2);

  // Hacemos la resta
  let resultado = numero1 - numero2;

  // Mostramos el resultado
  document.getElementById("resultado").innerHTML = resultado;
}

function multiplicar() {
  // Cogemos los valores de los dos inputs
  let numero1 = document.getElementById("numero1").value;
  let numero2 = document.getElementById("numero2").value;

  // Convertimos los valores a números
  numero1 = Number(numero1);
  numero2 = Number(numero2);

  // Hacemos la multiplicación
  let resultado = numero1 * numero2;

  // Mostramos el resultado
  document.getElementById("resultado").innerHTML = resultado;
}

function dividir() {
  // Cogemos los valores de los dos inputs
  let numero1 = document.getElementById("numero1").value;
  let numero2 = document.getElementById("numero2").value;

  // Convertimos los valores a números
  numero1 = Number(numero1);
  numero2 = Number(numero2);

  // Hacemos la división
  let resultado = numero1 / numero2;

  // Mostramos el resultado
  document.getElementById("resultado").innerHTML = resultado;
}
