import { useState } from "react";

const AddExpenseForm = ({onSubmit,onAddExpense}) => {

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [amount, setAmount] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        const expense =   { date: new Date(date), expense: title, expenseAmount: amount }
        onSubmit(expense)
        setTitle("")
        setAmount("")
        setDate("")
        onAddExpense(false)
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    }
    const handleDateChange = (event) => {
        setDate(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" value={title} onChange={handleTitleChange} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" min="0" value={amount} onChange={handleAmountChange} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" min="2020-01-01" value={date} onChange={handleDateChange}/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm