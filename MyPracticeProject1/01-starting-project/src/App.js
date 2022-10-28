import React,{useState} from 'react';

import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";
import usersList from "./Components/Users/UsersList";

function App() {
    const [userList, setUserList] = useState([]); //initiate with empty array
    const addUserHandler =(uName, uAge) =>{
        setUserList((prevUsersList) => {
            return [...prevUsersList,
                {name: uName,
                age: uAge,
                id: Math.random().toString()}]
        });
    };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
        <UsersList users={userList}></UsersList>

    </div>
  );
}

export default App;
