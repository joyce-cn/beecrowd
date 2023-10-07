let line1 = lines.shift().split(" ")
let a = Number(line1[0])
let b = Number(line1[1])
let c = Number(line1[2])

if ( a < b + c &&  b < a + c &&  c < a + b) {
console.log("Perimetro = " + (a + b + c).toFixed(1))
} else 
console.log("Area = " + (((a + b) * c ) / 2).toFixed(1))