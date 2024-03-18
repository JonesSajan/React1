
const AddExpenseButton = ({onAddExpense}) => {

    return (
        <div className="new-expense" >
            <div className="new-expense__actions">
                    <button onClick={() => onAddExpense(true)}>Add Expense</button>
            </div>
        </div>
    )
}
export default AddExpenseButton;