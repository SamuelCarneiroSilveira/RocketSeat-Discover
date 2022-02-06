/* ### Sistema de gastos familiares

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
      * Receitas: []
      * Despesas: []
    
    Agora crie uma função que irá calcular o total de receitas e despeas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo     
 */
let family = {
  incomes: [2500, 3200, 250.80, 360.45],
  expenses: [320.34, 128.45 , 176.87, 1450.00]
}

function sum(array){
    let total = 0;
      for(let value of array){
        total += value
      }
    return total
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)

  const total = calculateIncomes - calculateExpenses
  
  if(total >= 0){
     console.log('Seu saldo está positivo') 
     console.log('+ ' + total) 
    } else {
    console.log('Seu saldo está negativo') 
    console.log('- ' + total) 
  }
}

calculateBalance()
