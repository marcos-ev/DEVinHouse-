export default class Juros {
  constructor(capitalInicial, taxaAplicada, tempo) {
    this._capitalInicial = capitalInicial;
    this._taxaAplicada = taxaAplicada;
    this._tempo = tempo;
  }

  get jurosSimples() {
    return this._capitalInicial * this._taxaAplicada * this._tempo;
  }

  get jurosCompostos() {
    return this._capitalInicial * (1 + this._taxaAplicada) ** this._tempo;
  }
}


