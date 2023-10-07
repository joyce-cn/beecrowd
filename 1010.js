let line1 = lines.shift().split(" ")
let line2 = lines.shift().split(" ")
let numero1 = parseFloat(line1[1])  
let valor1 = parseFloat(line1[2])
let numero2 = parseFloat(line2[1])
let valor2 = parseFloat(line2[2])

let resultado1 = numero1 * valor1
let resultado2 = numero2 * valor2

let total = Number(resultado1 + resultado2)

console.log("VALOR A PAGAR: R$",(total).toFixed(2))