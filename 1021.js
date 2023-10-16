let valor = lines.shift()

    console.log("NOTAS:")
    console.log(Math.floor(valor / 100) + " " +"nota(s) de R$ 100.00") 
        valor = (valor % 100)
        
    console.log(Math.floor(valor / 50) + " " + "nota(s) de R$ 50.00")
       valor = (valor % 50)
       
    console.log(Math.floor(valor / 20) + " " + "nota(s) de R$ 20.00")   
        valor = (valor % 20)
        
    console.log(Math.floor(valor / 10) + " " + "nota(s) de R$ 10.00")    
        valor = (valor % 10 )
        
    console.log(Math.floor(valor / 5) + " " + "nota(s) de R$ 5.00") 
        valor = (valor % 5)  
        
    console.log(Math.floor(valor /2) + " " + "nota(s) de R$ 2.00")
        valor = (valor % 2)
        
    console.log("MOEDAS:")
    console.log(parseInt(valor / 1.00) + " " + "moeda(s) de R$ 1.00")
        valor = valor % 1.00
        valor = valor * 100
    console.log(parseInt(valor / 50) + " " + "moeda(s) de R$ 0.50")
        valor = valor % 50
    console.log(parseInt(valor / 25) + " " + "moeda(s) de R$ 0.25")
        valor = valor % 25
    console.log(parseInt(valor / 10) + " " + "moeda(s) de R$ 0.10")
        valor = valor % 10
    console.log(parseInt(valor / 5) + " " + "moeda(s) de R$ 0.05")
        valor = valor % 5 
    console.log(Math.floor(valor / 1) + " " + "moeda(s) de R$ 0.01")