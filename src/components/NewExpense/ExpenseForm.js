import React,{useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) =>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    //use object here to see all input as a whole rather than three states
    // const [userInput, setUserInput] = userState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });

    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value); //deal with changing staff
        // setUserInput({
        //     ...userInput, //omit other parameters
        //     enteredTitle: event.target.value
        // })
        // setUserInput((prevState)=> {
        //     return {...prevState,enteredTitle: event.target.value};
        // });
    };
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
        // // setUserInput({
        // //     ...userInput, //omit other parameters
        // //     enteredAmount: event.target.value
        // // })
        // setUserInput((prevState)=> {
        //     return {...prevState,enteredAmount: event.target.value};
        // });

    };
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput, //omit other parameters
        //     enteredDate: event.target.value
        // })
        // setUserInput((prevState)=> {
        //     return {...prevState,enteredDate: event.target.value};
        // });
    };
    const submitHandler = (event)=> {
        event.preventDefault();

        const expenseData = { //hold the data
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expenseData);

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredDate('');//this means that we clear the input
        setEnteredAmount('');//set the inputs back to original when the form is submitted
    };
    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text'
                       value={enteredTitle}
                       onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01'
                       value={enteredAmount} //here the input will take what you finally updated
                       onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31'
                       value={enteredDate}
                       onChange={dateChangeHandler}/>
            </div>

        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onStop}>Clear</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;