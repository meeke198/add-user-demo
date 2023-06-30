import React, { useState } from 'react';
import AddUser from './Users/AddUser';
import UserIndex from './Users/UserIndex';

function App() {
  const [userList, setUserList] = useState([])
  const addUserHandler = (user) => {
    setUserList((prevList) =>{
      return [...prevList, user];
      });
  }
  return (
    <div>
    <AddUser addUser={addUserHandler}/>
    <UserIndex data={userList}/>
    </div>
  );
}

export default App;
