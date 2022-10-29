import React, {useState,useRef} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props =>{
    // const nameInputRef = useRef();
    // const ageInputRef = useRef();
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredUserage, setEnteredUserage] = useState(''); //initialize with string here
    //dynamic modal message
    const [error, setError] = useState();

    const addUserHandler = (event) =>{
        event.preventDefault(); //prevent default action when the onSubmit is submitted
        if (enteredUsername.trim().length === 0 || enteredUserage.trim().length === 0){
            setError({
                title: 'Invalid input',
                message:'Please enter a valid name and age (non-empty value)'
            }
           );
            return;
        }
        if (+enteredUserage < 1){//ensure the enteredUsage is number by using +
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (>0).'
            }
            )
            return;

        }

        props.onAddUser(enteredUsername,enteredUserage);
        setEnteredUserage('');
        setEnteredUsername('');
    };

    const usernameChangeHandler = (event) =>{
        if (event.target.value.length === 0){
            console.log('Please Input UserName');
        } else{
            setEnteredUsername(event.target.value);
        }

    };

    const ageChangeHandler = (event) =>{
        setEnteredUserage(event.target.value)
    };
    const errorHandler = () =>{
        setError(null);
    };

return(
    <React.Fragment>
        {error &&
            <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>UserName</label>
        <input id='username' type='text'
               value={enteredUsername}
               onChange={usernameChangeHandler}
        // ref={nameInputRef}
            />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number'
               value={enteredUserage}
               onChange={ageChangeHandler}
            />
        <Button type='submit' onConfirm={errorHandler}>Add User</Button>
    </form>
        </Card>
        </React.Fragment>
)

};

export default AddUser;