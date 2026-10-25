//Funções
function VerificadorIdade(idade) {
    if (idade >= 18) {
        console.log(`Com ${idade} anos, tu é maior de idade`)
    } else if (idade >= 13) {
        console.log(`Com ${idade} anos, tu é adolecente`)
    } else {
        console.log(`Com ${idade} anos, tu é criaça`)
    }
}

VerificadorIdade(18)