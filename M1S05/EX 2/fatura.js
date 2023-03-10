export default class Fatura {
  constructor(id, descricao, quantia, preco) {
    this.id = id;
    this.descricao= descricao;
    this.quantia = quantia;
    this.preco = preco;    
  }
 

  // obterValorTotal() {
  //   return this.quantia * this.preco;
  //  SEM GET}

  get valorTotal() {
    return this.quantia * this.preco;
  }
}
 



 