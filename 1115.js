while(true){
    let line1 = lines.shift().split(" ")
    let x = Number(line1[0])
    let y = Number(line1[1])
    
    if(x === 0 || y === 0){
        break;
    }
    if(x > 0 && y > 0){
        console.log('primeiro')
    }else if(x < 0 && y > 0){
        console.log('segundo')
    }else if(x < 0 && y < 0){
        console.log('terceiro')
    }else if(x > 0 && y < 0){
        console.log('quarto')
    }else {
        console.log("")
    }
    }