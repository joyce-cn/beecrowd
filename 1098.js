for(let i = 0;i <= 2;i += 0.2){
    for(let j = 1;j <= 3;j++){
    console.log(`I=${formatarValor(i)} J=${formatarValor(j + i)}`)
    }
    }
    function formatarValor(valor){
    valor = Number(valor.toFixed(1))
    let valor2 = parseInt(valor)
    
    if((valor - valor2) === 0){
    return valor.toFixed(0)
    } else {
    return valor.toFixed(1)
    }
    }