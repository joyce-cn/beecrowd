let x = parseInt(lines.shift())
let resposta
let i
for(let i = 1;i <= x;i++){
    if(i % 2 === 0){
       resposta = Math.pow(i, 2)
       console.log(`${i}^2 = ${resposta}`)
    }
} 