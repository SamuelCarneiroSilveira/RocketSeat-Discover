/** ### Celsius to Farhenheit - Minha resolução

  Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

  C = (F - 32) * 5/9

  F = C * 9/5 + 32

 */

let tempString = '-32f'
tempString = tempString.toLocaleUpperCase()

function transforma(tempS){
  
  // Parte para Captura de dados ##################################
  let valorAntes
  let tipoAntes

  // Capturar valor----------------------------------------------- 
  function pegaValor(string){
    let tempAntes = ''
    
    for(let caracter of string){
      if(caracter != 'F' && caracter != 'C' ){
        tempAntes += caracter   
      }
    }
    tempAntes = parseInt(tempAntes) 
    return tempAntes
  }
  valorAntes = pegaValor(tempS) 


  // Capturar tipo------------------------------------------------

  
  function pegaTipo(string){
    let tipo
  
    for(let caracter of string){
      if(caracter === 'F'){
        tipo = 'F'; 
        return tipo} else 
        if(caracter === 'C'){
        tipo = 'C'; 
        return tipo}
      }
  }
  tipoAntes = pegaTipo(tempS)



  // Parte para transformação ####################################
  let valorFinal

  if(tipoAntes === 'C'){
    valorFinal = (valorAntes * (9/5)) + 32
    console.log(`O valor final é ${valorFinal.toFixed(2)} graus Fahrenheit`)
  } else if(tipoAntes === 'F'){
    valorFinal = (valorAntes - 32) * (5/9)
    console.log(`O valor final é ${valorFinal.toFixed(2)} graus Celsius`)
  }
}

transforma(tempString)