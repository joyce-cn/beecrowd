let lines1 
let numero
let count = 0
for (let i = 1; i <= 5; i++) {
    lines1 = Number(lines.shift())
    if (lines1 % 2 === 0) {
    count = count + 1
}
}
console.log(`${count} valores pares`)