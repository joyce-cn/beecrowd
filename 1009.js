let nome = parseFloat(lines.shift())
let salarioFixo = parseFloat(lines.shift())
let vendasEfetuadas = parseFloat(lines.shift())
let porcentagem = (vendasEfetuadas * 0.15) 
let montanteTotal = salarioFixo + porcentagem

console.log("TOTAL = R$",(montanteTotal).toFixed(2))