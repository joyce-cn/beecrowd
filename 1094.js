let N = Number(lines.shift())
let cont = 0
let cont1 = 0
let cont2 = 0


for(let i = 0;i < N;i++){
let lines1 = lines.shift().split(" ")
let a = Number(lines1[0])
let b = lines1[1]

if(b  == 'C'){
    cont += a
}else if(b  == 'R'){
    cont1 += a
}else if(b  == 'S'){
    cont2 += a
}

}
let total = Number((cont) + (cont1) + (cont2))
console.log(`Total: ${Number(total)} cobaias
Total de coelhos: ${cont}
Total de ratos: ${cont1}
Total de sapos: ${cont2}
Percentual de coelhos: ${(cont * 100 / total).toFixed(2)} %
Percentual de ratos: ${(cont1 * 100/ total).toFixed(2)} %
Percentual de sapos: ${(cont2 * 100/ total).toFixed(2)} %`)