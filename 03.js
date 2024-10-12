//instalar bibliotexa pra ler dados pelo promnpotnp

const prompt = require('readline-sync')


const idade = prompt.question('Qual e sua idade? ')



const idadeNumber =  Number(idade)

console.log(idadeNumber, typeof idadeNumber)

console.log(String(10), typeof String(10))


