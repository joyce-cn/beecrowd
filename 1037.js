let valor = lines.shift()

if (valor >= 0 && valor <= 100) {
if (valor <= 25) {
    console.log("Intervalo [0,25]")
    }
    else if (valor > 25 && valor <= 50){
    console.log("Intervalo (25,50]")
    }
    else if (valor > 50 && valor <= 75){
    console.log("Intervalo (75,100]")
    }
    else {
    console.log("Intervalo (75,100]")
}
}else {
    console.log("Fora de intervalo")
    }