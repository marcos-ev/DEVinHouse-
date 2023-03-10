const PalavraPali = (palavra) => {

  const palavraInvertida = palavra.split('').reverse().join('');

  
  return palavra === palavraInvertida;
}

const teste1 = PalavraPali("ana");
console.log(teste1); 

const teste2 = PalavraPali("julia");
console.log(teste2); 

const teste3 = PalavraPali ("reinier")
console.log(teste3);

const teste4 = PalavraPali ("carol")
console.log(teste4);

