let idade = parseInt(lines.shift())
let anos = parseInt(idade / 365)
idade = idade % 365

let mes = parseInt(idade /30)
idade = idade % 30

let qtdedias = parseInt(idade)

console.log(anos +" "+"ano(s)")
console.log(mes +" "+ "mes(es)")
console.log(qtdedias +" "+ "dia(s)")