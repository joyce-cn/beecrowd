let a = 0
let b = 0
let c = 0




//código 1134
while(1){
let x = Number(lines.shift())
if(x > 0 && x < 4){
if(x == 1) {
a += 1
}else if(x == 2) {
b += 1
}else {
c += 1
}
}else if(x == 4){
console.log(`MUITO OBRIGADO`)
console.log(`Alcool: ${a}`)
console.log(`Gasolina: ${b}`)
console.log(`Diesel: ${c}`)
break;
}
}