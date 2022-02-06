// Throw, arremesso 

function sayMyName(name = ''){
  if(name === ''){
    throw 'nome é obrigatório'
  }
  console.log('depois do erro')
} 

//Try/Catch

try{
  sayMyName('')
  
} catch(e) {
  console.log(e)
}

console.log('Após a função de erro')

