let line1 = lines.shift().split(" ")
let a = Number(line1[0])
let b = Number(line1[1])
let c = Number(line1[2])
let min1, min2, min3

min1 = Math.min(a, Math.min(b, c))

if (min1 == a) {
min2 = Math.min(b,c)
min3 = Math.max(b,c)
}
if (min1 == b) {
min2 = Math.min(a,c)
min3 = Math.max(a,c)
}
if (min1 == c) {
min2 = Math.min(a,b)
min3 = Math.max(a,b)
}

console.log(min1)
console.log(min2)
console.log(min3)
console.log("")
console.log(a)
console.log(b)
console.log(c)