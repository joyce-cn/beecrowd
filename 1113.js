while(1){
    let lines1 = lines.shift().split(" ")
    let a = Number(lines1[0])
    let b = Number(lines1[1])
    if(a < b ){
        console.log("Crescente")
    }
    else if(a > b){
        console.log("Decrescente")
    }  else if(a === b) {
        break; 
    }
}