let count = 0
let soma = 0

while(count !== 2){
    let nota = parseFloat(lines.shift())

if(nota >= 0 && nota <= 10){
count+=1
soma+=nota
}else {
console.log("nota invalida")
} 
}
if(count === 2){
console.log(`media = ${((soma) / 2.0).toFixed(2)}`)
soma = 0
count = 0
console.log("novo calculo (1-sim 2-nao)")
}

while(1){
    let cod = parseFloat(lines.shift())
    if(cod !== 1 && cod !== 2){
        console.log("novo calculo (1-sim 2-nao)")
        }
    else if(cod == 1 ){
        retornarValor()
        

    }else if (cod == 2){
        break;
    }
}

function retornarValor(){
    let count = 0
    let soma = 0
    while(count !== 2){
        let nota = parseFloat(lines.shift())
    
    if(nota >= 0 && nota <= 10){
    count+=1
    soma+=nota
    }else {
    console.log("nota invalida")
    } 
    }
    if(count === 2){
    console.log(`media = ${((soma) / 2.0).toFixed(2)}`)
    console.log("novo calculo (1-sim 2-nao)")
    }

}