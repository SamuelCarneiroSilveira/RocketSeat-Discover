// call back function

function sayMyName(name){
  name() // executando a função desconhecida name, que foi recebida abaixo
} 

sayMyName(
  () => {
   console.log('Estou em uma callback') 
  } // arrow function que vai ser executada pela função acima
)

//criar a função fora pra chamar ela dentro