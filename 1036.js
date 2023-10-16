let line1 = lines.shift().split(" ")
let a = parseFloat(line1[0])
let b = parseFloat(line1[1])
let c = parseFloat(line1[2])

let delta = (b * b) - 4 * a * c
let x1
let x2

if (delta < 0 || a === 0) {
     console.log("Impossivel calcular")
     
} else {
    
x1 = (-b + Math.sqrt(delta)) / (2 * a)
x2 = (-b - Math.sqrt(delta)) / (2 * a)

console.log("R1 = " + x1.toFixed(5))
console.log("R2 = " + x2.toFixed(5))

}