let pos = 1
let maior = 0
for(let i = 1;i <= 100;i++){
    let x = Number(lines.shift())
     if(x > maior){
        maior = x
        pos = i
    }
}
console.log(maior)
console.log(pos)