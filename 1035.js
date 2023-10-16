let line1 = lines.shift().split(" ")
let a = Number(line1[0])
let b = Number(line1[1])
let c = Number(line1[2])
let d = Number(line1[3])

if ((b > c) && (d > a) && (c + d) > (a + b) && (c >= 0) && (d >= 0) && (a % 2 === 0)) {
    console.log("Valores aceitos")
} else {
    console.log("Valores nao aceitos");
}