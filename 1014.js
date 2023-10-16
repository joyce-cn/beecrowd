let distanciaTotal = parseFloat(lines.shift())
let combustivel = parseFloat(lines.shift())
let resultado = (distanciaTotal / combustivel)

console.log(resultado.toFixed(3) + " "+"km/l")