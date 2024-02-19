import './App.css';
import Expense from './components/Expense';

const expenses = [
  { date: "March 1 2024", expense: "Food", expenseAmount: "Rs 1000" },
  { date: "March 2 2024", expense: "Transportation", expenseAmount: "Rs 500" },
  { date: "March 3 2024", expense: "Rent", expenseAmount: "Rs 20000" },
  { date: "March 4 2024", expense: "Groceries", expenseAmount: "Rs 1500" },
  { date: "March 5 2024", expense: "Entertainment", expenseAmount: "Rs 800" },
  { date: "March 6 2024", expense: "Utilities", expenseAmount: "Rs 2500" },
  { date: "March 7 2024", expense: "Insurance", expenseAmount: "Rs 3000" },
  { date: "March 8 2024", expense: "Medical", expenseAmount: "Rs 1000" },
  { date: "March 9 2024", expense: "Clothing", expenseAmount: "Rs 2000" },
  { date: "March 10 2024", expense: "Education", expenseAmount: "Rs 5000" },
  { date: "March 11 2024", expense: "Travel", expenseAmount: "Rs 3500" },
  { date: "March 12 2024", expense: "Charity", expenseAmount: "Rs 500" },
  { date: "March 13 2024", expense: "Savings", expenseAmount: "Rs 4000" },
  { date: "March 14 2024", expense: "Investment", expenseAmount: "Rs 6000" },
  { date: "March 15 2024", expense: "Gifts", expenseAmount: "Rs 2000" },
  { date: "March 16 2024", expense: "Dining Out", expenseAmount: "Rs 1200" },
  { date: "March 17 2024", expense: "Hobbies", expenseAmount: "Rs 1000" },
  { date: "March 18 2024", expense: "Fitness", expenseAmount: "Rs 1500" },
  { date: "March 19 2024", expense: "Beauty", expenseAmount: "Rs 800" },
  { date: "March 20 2024", expense: "Home Improvement", expenseAmount: "Rs 3000" },
  { date: "March 21 2024", expense: "Pet", expenseAmount: "Rs 500" },
  { date: "March 22 2024", expense: "Books", expenseAmount: "Rs 700" },
  { date: "March 23 2024", expense: "Electronics", expenseAmount: "Rs 4000" },
  { date: "March 24 2024", expense: "Car Maintenance", expenseAmount: "Rs 2000" },
  { date: "March 25 2024", expense: "Internet", expenseAmount: "Rs 1000" },
  { date: "March 26 2024", expense: "Phone", expenseAmount: "Rs 1500" },
  { date: "March 27 2024", expense: "Subscription", expenseAmount: "Rs 500" },
  { date: "March 28 2024", expense: "Taxes", expenseAmount: "Rs 3000" },
  { date: "March 29 2024", expense: "Loans", expenseAmount: "Rs 2000" },
  { date: "March 30 2024", expense: "Fees", expenseAmount: "Rs 1000" },
  { date: "March 31 2024", expense: "Others", expenseAmount: "Rs 500" },
  { date: "April 1 2024", expense: "Food", expenseAmount: "Rs 1200" },
  { date: "April 2 2024", expense: "Transportation", expenseAmount: "Rs 600" },
  { date: "April 3 2024", expense: "Rent", expenseAmount: "Rs 22000" },
  { date: "April 4 2024", expense: "Groceries", expenseAmount: "Rs 1700" },
  { date: "April 5 2024", expense: "Entertainment", expenseAmount: "Rs 900" },
  { date: "April 6 2024", expense: "Utilities", expenseAmount: "Rs 2700" },
  { date: "April 7 2024", expense: "Insurance", expenseAmount: "Rs 3200" },
  { date: "April 8 2024", expense: "Medical", expenseAmount: "Rs 1100" },
  { date: "April 9 2024", expense: "Clothing", expenseAmount: "Rs 2100" },
  { date: "April 10 2024", expense: "Education", expenseAmount: "Rs 5500" },
  { date: "April 11 2024", expense: "Travel", expenseAmount: "Rs 3800" },
  { date: "April 12 2024", expense: "Charity", expenseAmount: "Rs 600" },
  { date: "April 13 2024", expense: "Savings", expenseAmount: "Rs 4200" },
  { date: "April 14 2024", expense: "Investment", expenseAmount: "Rs 6200" },
  { date: "April 15 2024", expense: "Gifts", expenseAmount: "Rs 2100" },
  { date: "April 16 2024", expense: "Dining Out", expenseAmount: "Rs 1300" },
  { date: "April 17 2024", expense: "Hobbies", expenseAmount: "Rs 1100" },
  { date: "April 18 2024", expense: "Fitness", expenseAmount: "Rs 1600" },
  { date: "April 19 2024", expense: "Beauty", expenseAmount: "Rs 850" },
  { date: "April 20 2024", expense: "Home Improvement", expenseAmount: "Rs 3200" },
  { date: "April 21 2024", expense: "Pet", expenseAmount: "Rs 550" },
  { date: "April 22 2024", expense: "Books", expenseAmount: "Rs 750" },
  { date: "April 23 2024", expense: "Electronics", expenseAmount: "Rs 4200" },
  { date: "April 24 2024", expense: "Car Maintenance", expenseAmount: "Rs 2100" },
  { date: "April 25 2024", expense: "Internet", expenseAmount: "Rs 1100" },
  { date: "April 26 2024", expense: "Phone", expenseAmount: "Rs 1600" },
  { date: "April 27 2024", expense: "Subscription", expenseAmount: "Rs 550" },
  { date: "April 28 2024", expense: "Taxes", expenseAmount: "Rs 3200" },
  { date: "April 29 2024", expense: "Loans", expenseAmount: "Rs 2100" },
  { date: "April 30 2024", expense: "Fees", expenseAmount: "Rs 1100" },
  // Continue with more entries...
];


function App() {
  return (
    <div className="App" >
      <div style={{display:"flex",justifyContent:"center",alignItems:'center'}}><div style={{backgroundColor:"cyan", width:"70%", height:"100%", padding : "2%"}}>
      <h1>Expense Tracker</h1>
      {expenses.map((expense=>{return (<Expense date={expense.date} expense={expense.expense} expenseAmount={expense.expenseAmount}/>)}))}
    </div>
    </div></div>
  );
}

export default App;
