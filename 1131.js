let opcao = 1
let vitoriaDoInter = 0
let vitoriaDoGremio = 0
let empates = 0
let partidas = 0

while(opcao == 1){
    partidas++

    let line1 = lines.shift().split(" ")
    let golInternacional = Number(line1[0])
    let golGremio = Number(line1[1])

if(golInternacional > golGremio){
    vitoriaDoInter ++
}else if(golGremio > golInternacional){
    vitoriaDoGremio++
}else {
    empates++
}
console.log("Novo grenal (1-sim 2-nao)")

opcao = Number(lines.shift())
while(opcao !== 1 && opcao !== 2){
    console.log("Novo grenal (1-sim 2-nao)")
    opcao = lines.shift()
}
}


console.log(`${partidas} grenais`)
console.log(`Inter:${vitoriaDoInter}`)
console.log(`Gremio:${vitoriaDoGremio}`)
console.log(`Empates:${empates}`)
if(vitoriaDoInter > vitoriaDoGremio){
    console.log(`Inter venceu mais`)
}else if(vitoriaDoGremio > vitoriaDoInter){
    console.log(`Gremio venceu mais`)
}else{
    console.log("Nao houve vencedor")
}
