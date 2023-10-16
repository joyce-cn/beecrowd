let x = parseInt(lines.shift())
let qtde_dentro = 0
let qtde_fora = 0

for(let i = 0;i < x;i++){
    let numeros = parseInt(lines.shift())
 if (numeros >= 10 && numeros <= 20){
     qtde_dentro += 1
 } else {
     qtde_fora += 1
 }
} 
 console.log(`${qtde_dentro} in`)
 console.log(`${qtde_fora} out`)