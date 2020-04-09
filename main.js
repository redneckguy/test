let money = prompt('Your Monthly Budget?');
let time = Date.parse(prompt('Enter data as YYYY-MM-DD', 'YYYY-MM-DD'));


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}

for (let i = 0; i < 2; i ++) {
    let qtnMandatory = prompt('Enter mandatory expence item this Month');
    let qtnHowMuch = prompt('What would be the cost?');
    appData.expenses[qtnMandatory] = qtnHowMuch;
}

alert(appData.budget/30);