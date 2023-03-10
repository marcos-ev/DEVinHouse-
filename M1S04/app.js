let contas = [];

const formCadastro = document.getElementById("formCadastro");
formCadastro.addEventListener("submit", salvarConta);

function salvarConta(event) {
  event.preventDefault();

  const form = document.getElementById("formCadastro");
  const nome = document.getElementById("nome");
  const cpf = document.getElementById("cpf");
  const celular = document.getElementById("celular");
  const senha = document.getElementById("senha");
  const confirmaSenha = document.getElementById("confirmaSenha");

  if (!nome.value || !cpf.value || !celular.value || !senha.value || !confirmaSenha.value) {
    const mensagem = document.createElement("div");
    mensagem.innerHTML = "Todos os campos são obrigatórios";
    mensagem.style.color = "red";
    form.appendChild(mensagem);
    return;
  }

  if (senha.value !== confirmaSenha.value) {
    const mensagem = document.createElement("div");
    mensagem.innerHTML = "As senhas não conferem";
    mensagem.style.color = "red";
    form.appendChild(mensagem);
    return;
  }

  const conta = new Date().getTime();
  const cliente = {
    nome: nome.value,
    cpf: cpf.value,
    celular: celular.value,
    senha: senha.value,
    conta,
    saldo: 0,
  };

  contas.push(cliente);
  const mensagem = document.createElement("div");
  mensagem.innerHTML = `Conta criada com sucesso! Número da conta: ${conta}`;
  mensagem.style.color = "green";
  form.appendChild(mensagem);
}

const operacao = document.querySelector("#operacao");
const valor = document.querySelector("#valor");

operacao.addEventListener("change", function () {
  if (operacao.value === "consultaSaldo") {
    valor.disabled = true;
  } else {
    valor.disabled = false;
  }
});
// Função para consulta do saldo
function consultarSaldo(conta) {
  // Verifica se a conta existe
  if (!contas[conta]) {
    alert("Conta inválida");
    return;
  }

  // Obtém o saldo da conta
  const saldo = contas[conta].saldo;

  // Exibe a mensagem com o saldo atual da conta
  alert("Seu saldo atual é de R$ " + saldo);
}

// Função para depósito
function depositar(conta, valor) {
  // Verifica se a conta existe
  if (!contas[conta]) {
    alert("Conta inválida");
    return;
  }

  // Verifica se o valor é maior que zero
  if (valor <= 0) {
    alert("Valor inválido");
    return;
  }

  // Incrementa o saldo da conta
  contas[conta].saldo += valor;

  // Exibe a mensagem com a informação de depósito efetuado com sucesso e o novo saldo atual da conta
  alert("Depósito de R$ " + valor + " efetuado com sucesso. Seu saldo atual é de R$ " + contas[conta].saldo);
}

// Evento ao submit do formulário
document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();

  // Obtém os valores dos campos do formulário
  const conta = document.getElementById("conta").value;
  const senha = document.getElementById("senha").value;
  const operacao = document.querySelector("input[name=operacao]:checked").value;
  const valor = parseFloat(document.getElementById("valor").value);

  // Valida se a conta existe e a senha está correta
  if (!contas[conta] || contas[conta].senha != senha) {
    alert("Conta ou senha inválidos");
    return;
  }

  // Verifica qual é a operação selecionada
  if (operacao === "consultar") {
    consultarSaldo(conta);
  } else if (operacao === "depositar") {
    depositar(conta, valor);
  }
});

function sacar(conta, valor) {
  if (valor <= 0) {
    alert("O valor de saque deve ser maior que zero.");
    return;
  }

  // Verificar se a conta existe
  let saldo = 0;
  for (let i = 0; i < contas.length; i++) {
    if (contas[i].numero === conta) {
      saldo = contas[i].saldo;
      break;
    }
  }
  if (saldo === 0) {
    alert("Conta não encontrada.");
    return;
  }

  // Verificar se há saldo suficiente
  if (saldo < valor) {
    alert("Saldo insuficiente. Seu saldo atual é de " + saldo + ".");
    return;
  }

  // Realizar o saque
  for (let i = 0; i < contas.length; i++) {
    if (contas[i].numero === conta) {
      contas[i].saldo -= valor;
      break;
    }
  }

  alert("Saque realizado com sucesso. Seu novo saldo é de " + (saldo - valor) + ".");
}

