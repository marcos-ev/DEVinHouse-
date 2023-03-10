const pessoa = {
  nome: 'Ada',
  idade: 36,
  profissao: 'matemática'
};

const dadosPessoa = (pessoa) => {
  const { nome, idade, profissao } = pessoa;
  return `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;
}

console.log(dadosPessoa(pessoa));


