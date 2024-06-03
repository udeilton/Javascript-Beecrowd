var input =   require("fs").readFileSync("./stdin", ("utf8"));

var [A, B, C] = input.split(" ");
var PI = 3.14159;

var areaTriangulo = (A * C) / 2.0;
var areaCirculo = PI * Math.pow(C, 2);
var areaTrapezio = ((parseFloat(A) + parseFloat(B)) * C) / 2.0;
var areaQuadrado = B * B;
var areaRetanngulo = A * B;

console.log('TRIANGULO: ' + areaTriangulo.toFixed(3));
console.log('CIRCULO: ' + areaCirculo.toFixed(3));
console.log('TRAPEZIO: ' + areaTrapezio.toFixed(3))
console.log('QUADRADO: ' + areaQuadrado.toFixed(3));
console.log('RETANGULO: '+ areaRetanngulo.toFixed(3));