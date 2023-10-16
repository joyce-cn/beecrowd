let x = Number(lines.shift())
let y = Number(lines.shift())
let soma = 0
 
if(x < y){
    for(let i = x + 1;i < y;i++){
        if(i % 2 !== 0)
        soma += i
    }
} else {
    for(let i = y + 1;i < x;i++){
        if(i % 2 !== 0)
        soma += i
}
}
console.log(soma)
