let x = Number(lines.shift())
let y = Number(lines.shift())
let soma = 0

if(x < y){
for(let i = x;i <= y;i++){
if(i % 13 !== 0){
soma += i
}
}
}
else {
for(i = y;i <= x;i++){
if(i % 13 !== 0){
soma += i
}
}
console.log(soma)
}