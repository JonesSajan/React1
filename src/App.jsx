import './App.css';
import Expense from './components/Expenses/Expense';
import NewExpenses from './components/NewExpenses/NewExpenses';
import { useState } from 'react';

const expenses = [
  { date: new Date("March 1 2019"), expense: "Food", expenseAmount: "Rs 1000" },
  { date: new Date("March 2 2019"), expense: "Transportation", expenseAmount: "Rs 500" },
  { date: new Date("March 3 2019"), expense: "Rent", expenseAmount: "Rs 20000" },
  { date: new Date("March 4 2019"), expense: "Groceries", expenseAmount: "Rs 1500" },
  { date: new Date("March 5 2019"), expense: "Entertainment", expenseAmount: "Rs 800" },
  { date: new Date("March 6 2019"), expense: "Utilities", expenseAmount: "Rs 2500" },
  { date: new Date("March 7 2019"), expense: "Insurance", expenseAmount: "Rs 3000" },
  { date: new Date("March 8 2019"), expense: "Medical", expenseAmount: "Rs 1000" },
  { date: new Date("March 9 2019"), expense: "Clothing", expenseAmount: "Rs 2000" },
  { date: new Date("March 10 2020"), expense: "Education", expenseAmount: "Rs 5000" },
  { date: new Date("March 11 2020"), expense: "Travel", expenseAmount: "Rs 3500" },
  { date: new Date("March 12 2020"), expense: "Charity", expenseAmount: "Rs 500" },
  { date: new Date("March 13 2020"), expense: "Savings", expenseAmount: "Rs 4000" },
  { date: new Date("March 14 2020"), expense: "Investment", expenseAmount: "Rs 6000" },
  { date: new Date("March 15 2020"), expense: "Gifts", expenseAmount: "Rs 2000" },
  { date: new Date("March 16 2020"), expense: "Dining Out", expenseAmount: "Rs 1200" },
  { date: new Date("March 17 2020"), expense: "Hobbies", expenseAmount: "Rs 1000" },
  { date: new Date("March 18 2020"), expense: "Fitness", expenseAmount: "Rs 1500" },
  { date: new Date("March 19 2019"), expense: "Beauty", expenseAmount: "Rs 800" },
  { date: new Date("March 20 2019"), expense: "Home Improvement", expenseAmount: "Rs 3000" },
  { date: new Date("March 21 2019"), expense: "Pet", expenseAmount: "Rs 500" },
  { date: new Date("March 22 2019"), expense: "Books", expenseAmount: "Rs 700" },
  { date: new Date("March 23 2019"), expense: "Electronics", expenseAmount: "Rs 4000" },
  { date: new Date("March 24 2019"), expense: "Car Maintenance", expenseAmount: "Rs 2000" },
  { date: new Date("March 25 2019"), expense: "Internet", expenseAmount: "Rs 1000" },
  { date: new Date("March 26 2019"), expense: "Phone", expenseAmount: "Rs 1500" },
  { date: new Date("March 27 2019"), expense: "Subscription", expenseAmount: "Rs 500" },
  { date: new Date("March 28 2024"), expense: "Taxes", expenseAmount: "Rs 3000" },
  { date: new Date("March 29 2024"), expense: "Loans", expenseAmount: "Rs 2000" },
  { date: new Date("March 30 2024"), expense: "Fees", expenseAmount: "Rs 1000" },
  { date: new Date("March 31 2024"), expense: "Others", expenseAmount: "Rs 500" },
  { date: new Date("April 1 2018"), expense: "Food", expenseAmount: "Rs 1200" },
  { date: new Date("April 2 2018"), expense: "Transportation", expenseAmount: "Rs 600" },
  { date: new Date("April 3 2018"), expense: "Rent", expenseAmount: "Rs 22000" },
  { date: new Date("April 4 2018"), expense: "Groceries", expenseAmount: "Rs 1700" },
  { date: new Date("April 5 2018"), expense: "Entertainment", expenseAmount: "Rs 900" },
  { date: new Date("April 6 2018"), expense: "Utilities", expenseAmount: "Rs 2700" },
  { date: new Date("April 7 2018"), expense: "Insurance", expenseAmount: "Rs 3200" },
  { date: new Date("April 8 2018"), expense: "Medical", expenseAmount: "Rs 1100" },
  { date: new Date("April 9 2024"), expense: "Clothing", expenseAmount: "Rs 2100" },
  { date: new Date("April 10 2024"), expense: "Education", expenseAmount: "Rs 5500" },
  { date: new Date("April 11 2022"), expense: "Travel", expenseAmount: "Rs 3800" },
  { date: new Date("April 12 2024"), expense: "Charity", expenseAmount: "Rs 600" },
  { date: new Date("April 13 2024"), expense: "Savings", expenseAmount: "Rs 4200" },
  { date: new Date("April 14 2024"), expense: "Investment", expenseAmount: "Rs 6200" },
  { date: new Date("April 15 2024"), expense: "Gifts", expenseAmount: "Rs 2100" },
  { date: new Date("April 16 2024"), expense: "Dining Out", expenseAmount: "Rs 1300" },
  { date: new Date("April 17 2024"), expense: "Hobbies", expenseAmount: "Rs 1100" },
  { date: new Date("April 18 2024"), expense: "Fitness", expenseAmount: "Rs 1600" },
  { date: new Date("April 19 2024"), expense: "Beauty", expenseAmount: "Rs 850" },
  { date: new Date("April 20 2024"), expense: "Home Improvement", expenseAmount: "Rs 3200" },
  { date: new Date("April 21 2024"), expense: "Pet", expenseAmount: "Rs 550" },
  { date: new Date("April 22 2024"), expense: "Books", expenseAmount: "Rs 750" },
  { date: new Date("April 23 2024"), expense: "Electronics", expenseAmount: "Rs 4200" },
  { date: new Date("April 24 2024"), expense: "Car Maintenance", expenseAmount: "Rs 2100" },
  { date: new Date("April 25 2024"), expense: "Internet", expenseAmount: "Rs 1100" },
  { date: new Date("April 26 2024"), expense: "Phone", expenseAmount: "Rs 1600" },
  { date: new Date("April 27 2024"), expense: "Subscription", expenseAmount: "Rs 550" },
  { date: new Date("April 28 2024"), expense: "Taxes", expenseAmount: "Rs 3200" },
  { date: new Date("April 29 2024"), expense: "Loans", expenseAmount: "Rs 2100" },
  { date: new Date("April 30 2024"), expense: "Fees", expenseAmount: "Rs 1100" },
];

function App() {

  const [expenseList, setExpenseList] = useState(expenses)
  
  const onSubmit = (expense) => {
    setExpenseList((prevValue)=>{
      return [expense, ...prevValue];
    })
  };


  return (
    <div>
    <NewExpenses onSubmit={onSubmit}/>
    <Expense expenses={expenseList}/>
    </div>
  );
}

export default App;
