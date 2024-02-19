import ExpenseDate from "./ExpenseDate";
function Expense(props) {
  const month = props.date.toLocaleString("en-US",{month:"long"});
  const day = props.date.toLocaleString("en-US",{day:"2-digit"});
  const year = props.date.getFullYear()
  return (
    <div className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description"> <h2>{props.expense}</h2></div>
        <div className="expense-item__price">{props.expenseAmount}</div>
      
    </div>
  );
}

export default Expense;
