/* ### Sistema de gastos familiar
 
Crie um objeto que possuirá 2 propriedades, ambas do tipo 
array:
    *receitas: []
    *despesas: []

Agora, crie uma função que irá calcular o total de receitas
e despesas e irá mostrar uma mensagem se a família está com
saldo positivo ou negativo, seguido do valor do saldo.
*/


//objeto com as informações de receita e despesa.
let family = {
    incomes: [2500.00, 3200.00, 250.60, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450.00]
}


//função onde será feita a soma.
function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total
}

//Função que irá receber a soma feita na função SUM, atualizará os valores e mostrará no console.log.
function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)
    
    const total = calculateIncomes - calculateExpenses
    
    const itsOk = total >= 0
    
    let balanceText = "negativo"
    
    if (itsOk) {
        balanceText = "Positivo"
    }
    
    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}`)
}

//chamada da função para mostrar as informações.
calculateBalance()
