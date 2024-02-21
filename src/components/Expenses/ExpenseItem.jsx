import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  
  const handleDelete = (e) => {
      // alert(e.target.parentElement)
      const parentElement = e.target.parentElement;
      parentElement.style.display = 'none';
    };
  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description"> <h2>{props.expense}</h2></div>
        <div className="expense-item__price">{props.expenseAmount}</div>
        <button onClick={handleDelete}>Delete</button>

    </Card>
  );
}

export default ExpenseItem;
