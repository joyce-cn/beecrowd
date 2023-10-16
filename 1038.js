lines = lines[0].split(" ");

let codigo = Number(lines[0]);
let qtde = Number(lines[1]);
let Total

if (codigo == 1) {
    Total = (qtde * 4.00)
}
 else if (codigo == 2 ) {
    Total = (qtde * 4.50)
}
 else if (codigo == 3 ) {
    Total = (qtde * 5.00)
}
 else if (codigo == 4 ) {
    Total = (qtde * 2.00)
}
 else if (codigo == 5 ) {
    Total = (qtde * 1.50)
}
console.log("Total: "+"R$"+" "+Total.toFixed(2))