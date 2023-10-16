let line1 = lines.shift().split(" ")
let a = Number(line1[0])
let b = Number(line1[1])

if (a == b) {
console.log("O JOGO DUROU", (24 - a + b),"HORA(S)")
} else if (a <= b) {
console.log("O JOGO DUROU", (Math. abs(a - b)),"HORA(S)")
}else {
console.log("O JOGO DUROU", (24 - a + b),"HORA(S)")
}