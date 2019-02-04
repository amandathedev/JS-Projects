let myAccount = {
    name: 'Amanda Treutler',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
    console.log(account)
}

console.log(myAccount)
addExpense(myAccount, 2.50)