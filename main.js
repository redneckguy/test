let money = prompt('Your Monthly Budget?');
let time = Date.parse(prompt('Enter data as YYYY-MM-DD', 'YYYY-MM-DD'));


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    /*expenses: {        
         expenceItem: prompt('Enter mandatory expence item this Month'),
         howMuchWllItCst: prompt('What would be the cost?'),
    },*/
    optionalExpenses: {},
    income: [],
    savings: false,
}

debugger;

for (let i = 0; i < 2; i ++) {
    let qtnMandatory = prompt('Enter mandatory expence item this Month');
    let qtnHowMuch = prompt('What would be the cost?');
    appData.expenses[qtnMandatory] = qtnHowMuch;
}

// function getExpenses() {
//     let a = appData.expenses.expenceItem;
//     let b = appData.expenses.howMuchWllItCst;
//     alert(`expenses: "${a}" : "${b}"`);
// }

// getExpenses();


// function getDailyBudget() {
//     oneDay = appData.budget / 30;
//     alert(oneDay);
// }

// getDailyBudget();

alert(appData.budget/30);