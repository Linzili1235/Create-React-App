import React from "react";

import classes from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = props =>{ //expect the props will pass an array of users
    return (
    <Card className={classes.users}>
        <ul>
        {props.users.map(user =>
            (<li key={user.id}>{user.name} ({user.age} years old)</li>)
        )}
        </ul>
    </Card>
    );

};

export default UsersList;
