let qtdeHora = lines.shift()
let velocidadeMedia = lines.shift()

let qtdekilometros = qtdeHora * velocidadeMedia
let resultado = qtdekilometros/12

console.log(resultado.toFixed(3))