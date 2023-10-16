var lines = input.split(" ");
let a = parseFloat(lines[0])
let b = parseFloat(lines[1])
let c = parseFloat(lines[2])

let triangulo = (a * c)/2;
console.log("TRIANGULO: "+(triangulo).toFixed(3))


let circulo = 3.14159 * (c * c);
console.log("CIRCULO: "+(circulo).toFixed(3))

let trapezio = ((a + b) * (c))/2
console.log("TRAPEZIO: "+(trapezio).toFixed(3))

let quadrado = b * b
console.log("QUADRADO: "+(quadrado).toFixed(3))

let retangulo = a * b
console.log("RETANGULO: "+(retangulo).toFixed(3))