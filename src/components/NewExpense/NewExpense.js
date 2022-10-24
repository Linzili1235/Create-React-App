import React, {useState} from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const startEditingHandler = () => {
        setIsEditing(true)
    };
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
        // console.log(expenseData); //first step
    };

    const stopEditingHandler = () => {
     setIsEditing(false);
    }

    const cancelEditingHandler = () =>{
        setIsEditing(false);
    }

    let dont = <button onClick={startEditingHandler}>Add New Expense</button>;
    if (isEditing){
        dont = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onStop = {stopEditingHandler}
        />

    }

    return <div className="new-expense">
        {/*{!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}*/}
        {/*{isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onStop = {stopEditingHandler}*/}
        {/*/>}*/}
        {dont}

    </div>
};

export default NewExpense;