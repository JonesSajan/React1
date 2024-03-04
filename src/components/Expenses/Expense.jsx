import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import { useState } from 'react';

const Expense = (props) => {

  
  const handleYear = (e) => {
    
    if(e.target.value !=="")
  {
    let year = e.target.value;
    setExpenseList(()=>{
    const newList = props.expenses.filter(expense => expense.date.getFullYear().toString() === year)
    console.log("newList.....",newList);
    return newList
  })
  }
  else{
    setExpenseList(props.expenses)
  }
  }


  const [expenseList, setExpenseList] = useState(props.expenses)

  let content = <h3>No expenses added for this year</h3>

  if(expenseList.length > 0) {
    content = expenseList.map((expense=>{return (<ExpenseItem date={expense.date} expense={expense.expense} expenseAmount={expense.expenseAmount}/>)}))
  }
  if (expenseList.length === 1) {
    content = (
      <>
        {content}
        <h3>Add more Expenses</h3>
      </>
    );
  }

  
  return (
    <Card className="expense" >
        <div style={{backgroundColor:"cyan", width:"70%", height:"100%", padding : "2%"}}>
      <h1>Expense Tracker</h1>
      <select onChange={handleYear}>
          <option value="">--select--</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
      </select>
      {content}
      </div>
    </Card>
  );
}

export default Expense;
