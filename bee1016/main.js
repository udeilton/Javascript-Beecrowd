const input = require("fs").readFileSync("./stdin", "utf-8");

const qtdMinutos = (60 * input) / 30;

console.log(qtdMinutos + " minutos");