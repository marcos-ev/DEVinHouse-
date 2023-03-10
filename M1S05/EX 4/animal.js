class Animal {
  constructor(nome, idade, som) {
    this.nome = nome;
    this.idade = idade;
  }
}

class Cachorro extends Animal {
  constructor(nome, idade) {
    super(nome, idade);
    this.som = 'latido';
  }
}

class Gato extends Animal {
  constructor(nome, idade) {
    super(nome, idade);
    this.som = 'miado';
  }
}

export { Cachorro, Gato };
