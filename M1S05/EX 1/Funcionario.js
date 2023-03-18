class Funcionario {
  constructor(cpf, nomeCompleto, salario) {
    this.cpf = cpf;
    this.nomeCompleto = nomeCompleto;
    this.salario = salario;
  }

  promover(percentual) {
    const aumento = (percentual / 100) * this.salario;
    this.salario += aumento;
  }

  validarCPF() {
    // Lógica de validação do CPF
    // Retornar true se for válido, false caso contrário
  }
}

export default Funcionario;
