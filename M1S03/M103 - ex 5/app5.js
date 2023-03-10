const somaTudo = (...arr) => {
  let resultado = 0;
  arr.forEach(numero => resultado += numero);
  return resultado;
};

const resultado = somaTudo(1, 2, 3, 4, );
console.log(resultado);


