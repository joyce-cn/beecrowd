let line1 = lines.shift().split(" ")
let x = parseFloat(line1[0])
let y = parseFloat(line1[1])
let z = parseFloat(line1[2])
let a = parseFloat(0);
let b = parseFloat(0);
let c = parseFloat(0);

if (x >= y && x >= z) {
a = x;
b = y;
c = z;
} else if (y >= x && y >= z) {
a = y;
b = x;
c = z;
} else if (z >= y && z >= x) {
a = z;
b = y;
c = x;
}

if (a >= b + c) {
console.log("NAO FORMA TRIANGULO");
} else if (Math.pow(a, 2) == Math.pow(b, 2) + Math.pow(c, 2)) {
console.log("TRIANGULO RETANGULO");
} else if (Math.pow(a, 2) > Math.pow(b, 2) + Math.pow(c, 2)) {
console.log("TRIANGULO OBTUSANGULO");
} else if (Math.pow(a, 2) < Math.pow(b, 2) + Math.pow(c, 2)) {
console.log("TRIANGULO ACUTANGULO");
}
if (a == b && a == c && b == c ) {
console.log("TRIANGULO EQUILATERO");
} else if (a == b || a == c || b == c) {
console.log("TRIANGULO ISOSCELES");
}