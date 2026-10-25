for (let i = 0; i <= 5; i++) {
    console.log(`Com for: ${i}`)
}

let cont = 0

while (cont <= 5) {
    console.log(`Com while: ${cont}`)
    cont = cont + 1
}

let frutas = ["Manga", "Uva", "Maçã", "Pera", "Caju"]

for (const fruta of frutas) {
    console.log(`Com for of: ${fruta}`)
}