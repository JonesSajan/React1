import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import { useState } from 'react';




const Expense = (props) => {

  // const addNewExpense = (expense) => {
  //   setExpenses(...expenses, expense)

  // }
  const handleDelete = (e) => {
    alert(e)
  };

  // const [expenses, setExpenses] = useState(props.expenses)
  return (
    <Card className="expense" >
        <div style={{backgroundColor:"cyan", width:"70%", height:"100%", padding : "2%"}}>
      <h1>Expense Tracker</h1>
      {props.expenses.map((expense=>{return (<ExpenseItem date={expense.date} expense={expense.expense} expenseAmount={expense.expenseAmount}/>)}))}
      </div>
    </Card>
  );
}

export default Expense;
