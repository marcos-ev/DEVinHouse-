import Funcionario from './Funcionario';
import { validate } from 'gerador-validador-cpf'


const validarCPF = cpf => {
  validate('12345678900')
  // ou
  validate('123.456.789-00')
  
};

const ada = new Funcionario("528.442.040-31", "Ada Lovelace", 1000);
console.log(ada.salario); import CPF from 'cpf-check';

if (validarCPF(ada.cpf)) {
  console.log(`CPF válido: ${ada.cpf}`);
  ada.promover(50);
  console.log(`Novo salário: ${ada.salario}`);
} else {
  console.log(`CPF inválido: ${ada.cpf}`);
}
