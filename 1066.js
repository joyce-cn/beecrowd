let lines1
let pares = 0
let impares = 0
let positivo = 0
let negativo = 0

for (let i = 1; i <= 5; i++){
lines1 = Number(lines.shift())

    if((lines1 % 2) === 0){
     pares = pares + 1
    }else {
     impares = impares + 1
     }

     if(lines1 > 0){
     positivo = positivo + 1
     }else if(lines1 < 0){
      negativo = negativo + 1
     }
}
console.log(`${pares} valor(es) par(es)`)
console.log(`${impares} valor(es) impar(es)`)
console.log(`${positivo} valor(es) positivo(s)`)
console.log(`${negativo} valor(es) negativo(s)`)