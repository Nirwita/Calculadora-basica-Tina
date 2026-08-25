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
