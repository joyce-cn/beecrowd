let numeroFuncionario = lines.shift()
let horasTrabalhadas = lines.shift()
let valorPorHora = lines.shift()
let resultado = horasTrabalhadas * valorPorHora 

console.log("NUMBER =",numeroFuncionario)
console.log("SALARY = U$",(resultado).toFixed(2))