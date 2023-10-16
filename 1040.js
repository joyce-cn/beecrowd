let line1 = lines.shift().split(" ")
    let n1 = parseFloat(line1[0])
    let n2 = parseFloat(line1[1])
    let n3 = parseFloat(line1[2])
    let n4 = parseFloat(line1[3])
    
let line2 = lines.shift().split(" ")
    let n5 = parseFloat(line2[0])

let media = ((n1 * 2) + (n2 * 3) + (n3 * 4) + (n4 * 1)) / 10
let novaMedia

console.log("Media: " + (media).toFixed(1))

if (media >= 7) {
console.log('Aluno aprovado.')
}
else if (media >= 5 && media <= 6.9) {
console.log('Aluno em exame.')
console.log('Nota do exame: '+n5.toFixed(1))
novaMedia = parseFloat(media + n5) / 2
} else if(media < 5) {
console.log('Aluno reprovado.')
}
if (novaMedia >= 5){
console.log('Aluno aprovado.')
console.log('Media final: '+novaMedia.toFixed(1))
}else if(novaMedia < 5){
console.log('Aluno reprovado.')
console.log('Media final: '+novaMedia.toFixed(1))
}