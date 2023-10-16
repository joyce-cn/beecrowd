let N = lines.shift()
let valor1 = 1
let valor2 = 1 
let valor3 

for(let i = 0;i < N * 2;i++){
    console.log(`${valor1} ${Math.pow(valor1,2) + i%2} ${Math.pow(valor1,3) + i%2 }`)
    valor1 += i%2
}