function Expense(props) {
  return (
    <div className="expense-item">
        <div>{props.date}</div>
        <div className="expense-item__description"> <h2>{props.expense}</h2></div>
        <div className="expense-item__price">{props.expenseAmount}</div>
      
    </div>
  );
}

export default Expense;
