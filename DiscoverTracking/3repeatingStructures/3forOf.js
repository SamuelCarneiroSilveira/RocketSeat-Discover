// Repeating Structures
// For...of

let name = 'samuel'
let names = ['Beatriz','Ester','Paule']

for( let char of name) {
  console.log(char)
}

for( let name of names) { // Esse name não vai pegar o name
  console.log(name)
}

// Vai apresentar uma sequencia dos elementos da variável, no caso de string, vai apresentar letra a letra, e no caso de array vai apresentar elemento a elemento 