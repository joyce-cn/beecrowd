let T = 0
let cont = 0

while(1){
    let nota = Number(lines.shift())
    if(cont == 2) {
    console.log(`media = ${(T/ 2.0).toFixed(2)}`)
    break;
    }else if(nota >= 0 && nota <= 10){
    cont++
    T += nota
    }else {
    console.log("nota invalida")
    }
    }