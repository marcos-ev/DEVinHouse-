export class Time {
  constructor(nome, sigla, vitorias, derrotas, empates, golsMarcados, golsSofridos) {
      this.nome = nome;
      this.sigla = sigla;
      this.vitorias = vitorias;
      this.derrotas = derrotas;
      this.empates = empates;
      this.golsMarcados = golsMarcados;
      this.golsSofridos = golsSofridos;
  }

  get numeroDeJogos() {
      return this.vitorias + this.derrotas + this.empates;
  }

  get numeroDePontos() {
      return (this.vitorias * 3) + this.empates;
  }

  computarPartida(partida) {
      if (partida.siglaTimeA === this.sigla) {
          this.golsMarcados += partida.golsTimeA;
          this.golsSofridos += partida.golsTimeB;

          if (partida.golsTimeA > partida.golsTimeB) {
              this.vitorias++;
          } else if (partida.golsTimeA < partida.golsTimeB) {
              this.derrotas++;
          } else {
              this.empates++;
          }
      } else if (partida.siglaTimeB === this.sigla) {
          this.golsMarcados += partida.golsTimeB;
          this.golsSofridos += partida.golsTimeA;

          if (partida.golsTimeB > partida.golsTimeA) {
              this.vitorias++;
          } else if (partida.golsTimeB < partida.golsTimeA) {
              this.derrotas++;
          } else {
              this.empates++;
          }
      }
  }

  exibirSituacao() {
      console.log(`Nome: ${this.nome}`);
      console.log(`Sigla: ${this.sigla}`);
      console.log(`Vitórias: ${this.vitorias}`);
      console.log(`Derrotas: ${this.derrotas}`);
      console.log(`Empates: ${this.empates}`);
      console.log(`Gols marcados: ${this.golsMarcados}`);
      console.log(`Gols sofridos: ${this.golsSofridos}`);
      console.log(`Jogos: ${this.numeroDeJogos}`);
      console.log(`Pontos: ${this.numeroDePontos}`);
  }
}


