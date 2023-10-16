while(1){
    let y = ""
    let cont
    let k = 0
    let line1 = lines.shift().split(" ")
    let M = Number(line1[0])
    let N = Number(line1[1])
    
    if(N <= 0 || M <= 0){
    break;
    }
    if(M > N){
    for(cont = N;cont <= M;cont++){
        k += cont
        y += cont + " "
    }
    console.log(`${y}Sum=${k}`)
    }else{
    for(cont = M;cont <= N;cont++){
        k += cont
        y += cont + " "
    }
    console.log(`${y}Sum=${k}`)
    }
    }