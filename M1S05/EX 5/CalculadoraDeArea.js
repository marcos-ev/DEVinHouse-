export class CalculadoraDeArea {
  constructor(tipo, base, altura) {
    this.tipo = tipo;
    this.base = base;
    this.altura = altura;
  }

  calcular() {
    const formulas = {
      triangulo: () => (this.base * this.altura) / 2,
      quadrado: () => this.base * this.altura,
      retangulo: () => this.base * this.altura
    };

    const formula = formulas[this.tipo];
    if (formula) {
      return formula();
    }
    return 0;
  }
}