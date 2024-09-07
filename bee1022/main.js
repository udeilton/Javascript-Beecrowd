var input = require("fs").readFileSync("./stdin", ("utf-8"));
var line = input.split('\n')

const valores = input.split(' ').map(Number);

function verificarValores (a, b, c, d) {
    if (b>c && d>a && (c+d)>(a+b) && c>0 && d>0 && a%2===0){
        console.log('Valores aceitos')
    }else{
        console.log('Valores nao aceitos')
    }

}

verificarValores(...valores)


