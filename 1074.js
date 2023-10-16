let x = Number(lines.shift())

for(let i = 1;i <= x;i++){
let n = Number(lines.shift())
if(n === 0){
console.log(`NULL`)
    }else if(n % 2 === 0 && n > 0){
    console.log(`EVEN POSITIVE`) 
    }else if(n % 2 !== 0 && n > 0){
    console.log(`ODD POSITIVE`)

}else if(n % 2 === 0 && n < 0){
    console.log(`EVEN NEGATIVE`) 
    }else if(n % 2 !== 0 && n < 0){
    console.log(`ODD NEGATIVE`)
    }
}
