let line1 = lines.shift().split(" ")
    let a = parseFloat(line1[0])
    let b = parseFloat(line1[1])
    
if (b % a === 0 || a % b === 0) {
console.log("Sao Multiplos")
}else {
console.log("Nao sao Multiplos")
}