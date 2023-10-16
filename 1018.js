let valor = lines.shift()
//esse é o modulo do resto da divisão > valor = valor "%" 100
    console.log(valor)

    let a = valor / 100 
    valor = valor % 100

    let c = valor / 50
    valor = valor % 50

    let e = valor / 20 
    valor = valor % 20

    let g = valor / 10 
    valor = valor % 10

    let i = valor / 5
    valor = valor % 5

    let k = valor / 2
    valor = valor % 2

    let m = valor 

    console.log(Math.floor(a) +" " + "nota(s) de R$ 100,00")
    
    console.log(Math.floor(c) +" " + "nota(s) de R$ 50,00")
    
    console.log(Math.floor(e) +" " + "nota(s) de R$ 20,00")
    
    console.log(Math.floor(g) +" " + "nota(s) de R$ 10,00")
    
    console.log(Math.floor(i) +" " + "nota(s) de R$ 5,00")
    
    console.log(Math.floor(k) +" " + "nota(s) de R$ 2,00")
    
    console.log(Math.floor(m) +" " + "nota(s) de R$ 1,00")
