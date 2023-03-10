import { CalculadoraDeArea } from "./CalculadoraDeArea.js";

const quadA = new CalculadoraDeArea("quadrado", 4, 4);
const areaQA = quadA.calcular();
console.log(areaQA); 

const triangB = new CalculadoraDeArea("triangulo", 6, 8);
const areaTB = triangB.calcular();
console.log(areaTB); 

const retangC = new CalculadoraDeArea("retangulo", 4, 6);
const areaRC = retangC.calcular();
console.log(areaRC); 