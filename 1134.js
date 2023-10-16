let x = Number(lines.shift())
let y = Number(lines.shift())

if(x > y){
for(i = y + 1; i < x; i++){
    if((i % 5 == 2) || (i % 5 == 3)){
        console.log(i)
        }
    }
}else if(x < y){
for(i = x + 1; i < y; i++){
    if((i % 5 == 2) || (i % 5 == 3)){
        console.log(i)
}
}
}