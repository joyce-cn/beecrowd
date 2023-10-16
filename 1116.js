let quantidade = Number(lines.shift())
for(let i = 0;i < quantidade; i++){
let line1 = lines.shift().split(" ")
let x = Number(line1[0])
let y = Number(line1[1])
if(y === 0){
console.log("divisao impossivel")
}else {
console.log((x / y).toFixed(1))
}
}