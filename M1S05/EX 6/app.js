import Juros from "./Juros.js";

const aplicacao1 = new Juros(10000, 0.07, 24);
console.log("Juros simples (aplicação 1):", aplicacao1.jurosSimples);
console.log("Juros compostos (aplicação 1):", aplicacao1.jurosCompostos);

const aplicacao2 = new Juros(10000, 0.15, 10);
console.log("Juros simples (aplicação 2):", aplicacao2.jurosSimples);
console.log("Juros compostos (aplicação 2):", aplicacao2.jurosCompostos);
