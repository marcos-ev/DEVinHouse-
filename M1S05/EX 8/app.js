class Usuario {
  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  autenticar(emailInformado, senhaInformada) {
    return (this.email === emailInformado && this.senha === senhaInformada);
  }
}

const usuario = new Usuario("Usuário 1", "usuario@gmail.com", "senha123");
const mensagemEl = document.getElementById("mensagem");
const acessarBtn = document.getElementById("acessar");

acessarBtn.addEventListener("click", function(event) {
  event.preventDefault();
  const emailInformado = document.getElementById("email").value;
  const senhaInformada = document.getElementById("senha").value;

  if (usuario.autenticar(emailInformado, senhaInformada)) {
    mensagemEl.textContent = "Autenticação realizada com sucesso!";
    mensagemEl.style.color = "green";
  } else {
    mensagemEl.textContent = "Credenciais inválidas. Tente novamente.";
    mensagemEl.style.color = "red";
  }
});
