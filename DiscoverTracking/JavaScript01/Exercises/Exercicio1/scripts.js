/* ### Transformar notas escolares

   Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C
   
   * de 90 para cima - A
   * entre 80 - 89   - B
   * entre 70 - 79   - C
   * entre 60 - 69   - D
   * menor que 60    - F

*/

function notaParaLetra(nota){
   let scoreA = nota >= 90 && nota <= 100
   let scoreB = nota >= 80 && nota < 90
   let scoreC = nota >= 70 && nota < 80
   let scoreD = nota >= 60 && nota < 70
   
   if(nota >= 0 && nota<= 100){
      if (scoreA){console.log('Nota A') }else
      if (scoreB){console.log('Nota B')} else
      if (scoreC){console.log('Nota C')} else
      if (scoreD){console.log('Nota D')} else
      console.log('Nota F')   
   } else {
      console.log('Valor inválido')
   }
}

notaParaLetra(101)
notaParaLetra(-1)
notaParaLetra(0)
notaParaLetra(1)
notaParaLetra(45)
notaParaLetra(60)
notaParaLetra(61)
notaParaLetra(75)
notaParaLetra(85)
notaParaLetra(95)