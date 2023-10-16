let lines1
let count = 0

for (let i = 0; i < 6; i++){
lines1 = parseFloat(lines.shift())
if (lines1 > 0) {
count = count + 1
}
}
console.log(`${count} valores positivos`)