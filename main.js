let money = prompt('Your Budget');
let time = Date.parse(prompt('Enter data as YYYY-MM-DD', 'YYYY-MM-DD'));


let appData = {
    budget: money,
    timeData: time,
    expenses: { 
        expenceItem: prompt('Enter mandatory expence item this Month'),
        howMuchWllItCst: prompt('What would be the cost?'),
        // inResult: function() {        
        //     return (`expenses: "${expenceItem}" : "${howMuchWllItCst}"`);
        // }        
    },    
    optionalExpenses: {

    },
    income: [],
    savings: false,    
}

// appData.expenses = function() {        
//         return (`expenses: "${expenceItem}" : "${howMuchWllItCst}"`);
//     }        

// alert(appData.expenses);

function getExpenses() {
    let a = appData.expenses.expenceItem;
    let b = appData.expenses.howMuchWllItCst;
    alert(`expenses: "${a}" : "${b}"`);    
}

getExpenses();

function getDailyBudget() {
    oneDay = appData.budget/30,
    alert(oneDay);         
}

getDailyBudget();



