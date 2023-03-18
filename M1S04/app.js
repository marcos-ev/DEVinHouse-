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

function consultarSaldo(conta) {
  
  if (!contas[conta]) {
    alert("Conta inválida");
    return;
  }

 
  const saldo = contas[conta].saldo;

  
  alert("Seu saldo atual é de R$ " + saldo);
}


function depositar(conta, valor) {
  
  if (!contas[conta]) {
    alert("Conta inválida");
    return;
  }

  
  if (valor <= 0) {
    alert("Valor inválido");
    return;
  }

 
  contas[conta].saldo += valor;

  
  alert("Depósito de R$ " + valor + " efetuado com sucesso. Seu saldo atual é de R$ " + contas[conta].saldo);
}


document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();

  
  const conta = document.getElementById("conta").value;
  const senha = document.getElementById("senha").value;
  const operacao = document.querySelector("input[name=operacao]:checked").value;
  const valor = parseFloat(document.getElementById("valor").value);

  
  if (!contas[conta] || contas[conta].senha != senha) {
    alert("Conta ou senha inválidos");
    return;
  }

  
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

  
  if (saldo < valor) {
    alert("Saldo insuficiente. Seu saldo atual é de " + saldo + ".");
    return;
  }

 
  for (let i = 0; i < contas.length; i++) {
    if (contas[i].numero === conta) {
      contas[i].saldo -= valor;
      break;
    }
  }

  alert("Saque realizado com sucesso. Seu novo saldo é de " + (saldo - valor) + ".");
}

