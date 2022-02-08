/* 
  Function() contructor

  * expressão new, se usa na frente da função
  * criar um novo objeto
  * this keyword
  
  Moldar objetos com a palavra this
  Usar o nome da função contrutora com letra maiúscula 
*/

function Person(name) {
  this.name = name 
  this.walk = function() {
    return this.name + " está andando"
  }
} // como se fosse um molde para criar diversos objetos

const sam = new Person("Samuel")
const joao = new Person("Joao")

console.log(sam.walk())
console.log(joao.walk())