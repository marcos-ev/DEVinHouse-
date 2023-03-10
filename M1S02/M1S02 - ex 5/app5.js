var numero = parseInt(prompt('Digite um numero'));

if (isNaN(numero)) {
  alert ('Numero inválido');
} else {
  var pares = 0
  var impares= 0
  for (var i=0; i<=numero; i++){
    if (i %2 ===0){
      pares+= 1
    } else {
      impares += 1;
    }
  }

  alert ('Existem ' + pares + ' numeros pares e ' + impares + ' numeros impares')
}