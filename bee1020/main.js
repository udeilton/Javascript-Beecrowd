const input = require("fs").readFileSync("./stdin", ("utf8"));

let qtdDias = parseInt(input);

let qtdAno, qtdMeses;

qtdAno = parseInt(qtdDias / 365);
qtdDias = qtdDias % 365;

qtdMeses = parseInt(qtdDias / 30);
qtdDias = qtdDias % 30;

let resultado = `${qtdAno} ano(s)
${qtdMeses} mes(es)
${qtdDias} dia(s)`

console.log(resultado);

