import { Time } from './Time.js';
import { Partida } from './Partida.js';

const timeA = new Time('Time A', 'TMA', 0, 0, 0, 0, 0);
const timeB = new Time('Time B', 'TMB', 0, 0, 0, 0, 0);

const partida1 = new Partida('TMA', 3, 'TMB', 2);
const partida2 = new Partida('TMB', 1, 'TMA', 1);

timeA.computarPartida(partida1);
timeB.computarPartida(partida1);

timeA.computarPartida(partida2);
timeB.computarPartida(partida2);

timeA.exibirSituacao();
timeB.exibirSituacao();
