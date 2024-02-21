import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description"> <h2>{props.expense}</h2></div>
        <div className="expense-item__price">{props.expenseAmount}</div>
      
    </Card>
  );
}

export default ExpenseItem;
