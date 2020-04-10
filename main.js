let money = +prompt('Your Monthly Budget?', '');
let time = Date.parse(prompt('Enter data as YYYY-MM-DD', 'YYYY-MM-DD'));


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}

<<<<<<< HEAD
for (let i = 0; i < 2; i++) {
    while (true) {
        let a = prompt('Enter mandatory expence item this Month', ''),
            b = prompt('What would be the cost?', '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null &&
            (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            console.log('done');   
            break;     
        } else {
            alert('Please fill in the necessaty info');
        }
    }
}

appData.moneyPerDay = appData.budget / 30;

alert(`Everyday budget: ${Math.round(appData.moneyPerDay)}`);

if (appData.moneyPerDay < 100) {
    console.log("It's a minimum wage of life");        
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Middle class wages");    
} else if (appData.moneyPerDay > 2000) {
    console.log('You are reach bitch');
} else {
    console.log('Error');    
}

=======
for (let i = 0; i < 2; i ++) {
    let qtnMandatory = prompt('Enter mandatory expence item this Month');
    let qtnHowMuch = prompt('What would be the cost?');
    appData.expenses[qtnMandatory] = qtnHowMuch;
}

alert(appData.budget/30);
>>>>>>> master
