let totaldeSegundos = parseInt(lines.shift())
let qtdehora = totaldeSegundos / 3600
totaldeSegundos = totaldeSegundos % 3600

let qtdeMinutos = totaldeSegundos / 60
totaldeSegundos = totaldeSegundos % 60

qtdeSegundos = totaldeSegundos

console.log(parseInt(qtdehora) + ":" + parseInt(qtdeMinutos) + ":" + parseInt(qtdeSegundos))