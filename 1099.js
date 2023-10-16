let N = Number(lines.shift())
let soma = 0

for(let t = 0 ;t < N;t++){
let line1 = lines.shift().split(" ")
let x = Number(line1[0])
let y = Number(line1[1])
if(x > y){
    let i = x
    x = y
    y = i
}  
for(let t = x + 1;t < y;t++){
    if(t%2 !== 0){
    soma += t
    }
}
console.log(soma)
soma = 0
}