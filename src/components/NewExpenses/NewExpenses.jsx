import AddExpenseForm from "./AddExenseForm"

const NewExpenses = ({onSubmit,onAddExpense}) => {

    return (
        <div className="new-expense">
            <AddExpenseForm onSubmit={onSubmit} onAddExpense={onAddExpense}/>
        </div>
    )
}
export default NewExpenses;