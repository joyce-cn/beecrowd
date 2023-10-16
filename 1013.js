var lines = input.split(" ");
let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let c = parseInt(lines[2]);


let maiorAB = (a + b + Math.abs(a - b)) /2
let maiorXC = (c + maiorAB + Math.abs(c - maiorAB)) /2

console.log(maiorXC + " "+ "eh o maior")