let valor = Number(lines.shift())

for(let i = 0;i <valor;i++){
let line1 = lines.shift().split(" ")
let a = parseFloat(line1[0])
let b = parseFloat(line1[1])
let c = parseFloat(line1[2])
    let mediaP = ((a * 2) + (b * 3) + (c * 5)) / 10
    console.log(mediaP.toFixed(1))
}