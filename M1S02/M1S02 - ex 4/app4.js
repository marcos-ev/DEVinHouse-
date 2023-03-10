var soma = 0
do {
  var numero = (prompt('Digite um número'));
  
  if (numero === null) {
    break;
  }
  numero = parseInt(numero);
  
  if (isNaN(numero) || numero === -1) {
    continue;
  }
  soma += numero;
} while (numero !== -1);

alert(soma);






// var numerodigitado = 0
// var soma = 0



// while (numerodigitado != -1) {
//   console.log(numerodigitado);
//   numerodigitado = Number (prompt('Digite um numero para a soma'))
//   if (!isNaN(numerodigitado) && numerodigitado != -1) {
//     soma += numerodigitado
//   }
// }
// alert ('o resultado é: '+ soma)