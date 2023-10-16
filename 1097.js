let j = 7
for(let i = 1;i < 10;i++){
    console.log(`I=${i} J=${j}`)
    console.log(`I=${i} J=${j - 1}`)
    console.log(`I=${i} J=${j - 2}`)
    i += 1
    j += 2
}