//Arrays

const numeros = [10, 20, 30, 40]

console.log(numeros)

const usuario = {
    nome: "Renderson",
    idade: 19
}

const usuarios = [
    {nome: "Renderson", idade: 19},
    {nome: "Milena", idade: 15},
    {nome: "Orlei", idade: 46},
    {nome: "Xonike", idade: 9}
]

//Métodos 

// push = adicionar,
numeros.push(50)

//  pop = remover o último elemento,
usuarios.pop()

//  map = tranforma elementos,
const novoNumeros = numeros.map(()=> {
    return numeros + 10
})
console.log(`mais 10 em numeros (map): ${novoNumeros}`)

//  filter = filtrar elementos,
const maiorIdade = usuarios.filter(usuario => usuario.idade >= 18)
console.log(`maiores de idade (filter): ${maiorIdade}`)

//  find = encoontra elementos,
const menorIdade = usuarios.find(usuario => usuario.idade <= 10)
console.log(`Menor de idade (find): ${menorIdade}`)

//  some e reduce