

let money, time;

function start() {
    money = +prompt('Your Monthly Budget?', '');
    time = prompt('Enter data as YYYY-MM-DD', 'YYYY-MM-DD');
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Your Monthly Budget?', '');
    }
}

start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};


function chooseExpenses() {
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
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert(`Everyday budget: ${appData.moneyPerDay}`);
}

detectDayBudget();


function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("It's a minimum wage of life");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Middle class wages");
    } else if (appData.moneyPerDay > 2000) {
        console.log('You are reach bitch');
    } else {
        console.log('Error');
    }
}

detectLevel();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Please type in the total amount of your savings'),
            percent = +prompt('Please type in the required percentage');
        appData.monthIncome = (save / 100 / 12) * percent;
        alert('Monthley deposit income is: ' + appData.monthIncome);
    }
}

checkSavings();


function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let a = prompt('type in budget unnecessary thing');        
        while (true) {
            if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
                appData.optionalExpenses[i] = a;
                break;
            } else { 
                alert('Please fill in the necessaty info');
            }
        }
    }
}
