lines = lines.shift().split(" ")
let hi = parseInt(lines[0])
let mi = parseInt(lines[1])
let hf = parseInt(lines[2])
let mf = parseInt(lines[3])
let hr 
let mn 

if (hf > hi && mf > mi) {
hr = hf - hi
mn = mf - mi
console.log(`O JOGO DUROU ${hr} HORA(S) E ${mn} MINUTO(S)`)
} else if (hf < hi && mi > mf) {
hr = (hf - hi) + 23
mn = (mf - mi) + 60
console.log(`O JOGO DUROU ${hr} HORA(S) E ${mn} MINUTO(S)`)
}else if (hf == hi && mi > mf) {
hr = 23
mn = (mf - mi) + 60
console.log(`O JOGO DUROU ${hr} HORA(S) E ${mn} MINUTO(S)`)
}else if (hf == hi && mf > mi){
hr = 0
mn = mf - mi
console.log(`O JOGO DUROU ${hr} HORA(S) E ${mn} MINUTO(S)`)
}else if (hf > hi && mf == mi) {
hr = hf - hi
mn = 0
console.log(`O JOGO DUROU ${hr} HORA(S) E ${mn} MINUTO(S)`)
}else if(hf < hi && mf == mi) {
hr = (hf - hi) + 24
mn = 0
console.log(`O JOGO DUROU ${hr} HORA(S) E ${mn} MINUTO(S)`)
}else if (hi < hf && mf < mi) {
hr = (hf - hi) - 1
mn = (mf - mi) + 60
console.log(`O JOGO DUROU ${hr} HORA(S) E ${mn} MINUTO(S)`)
} else {
hr = 24
mn = 0
console.log(`O JOGO DUROU ${hr} HORA(S) E ${mn} MINUTO(S)`)
}
