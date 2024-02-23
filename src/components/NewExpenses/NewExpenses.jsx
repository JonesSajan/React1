import AddExpenseForm from "./AddExenseForm"

const NewExpenses = ({onSubmit}) => {

    return (
        <div className="new-expense">
            <AddExpenseForm onSubmit={onSubmit}/>
        </div>
    )
}
export default NewExpenses;