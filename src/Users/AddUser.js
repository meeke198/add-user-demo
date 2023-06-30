import { useState } from "react";
import Card from "../UI/Card";
import ErrorModal from "./ErrorModal";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
const initialUser = {
  userName: "Hien",
  age: "12",
};
// const initialError = {
//   title: "",
//   message: ""
// };

const AddUser = (props) => {
  const [userInput, setUserInput] = useState(initialUser);
  const [error, setError] = useState();
  const onChangeHandler = (field, value) => {
    setUserInput({
      ...userInput,
      [field]: value,
    });
    console.log(userInput);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      userInput["userName"].trim().length === 0 ||
      userInput["age"].trim().length === 0
    ) {
      console.log(userInput["userName"]);
      setError({
        title: "Invalid input",
        message: "Username or age are blank",
      });
      return;
    }
    if (+userInput["age"] < 1) {
      console.log(userInput["age"]);
      setError({
        title: "Invalid age",
        message: "Username must be 1 year and up",
      });
      return;
    }
    props.addUser(userInput);
    setUserInput({
      userName: "",
      age: "",
    });
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      <Card className={classes.input}>
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          />
        )}
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="userName">User's name</label>
          <input
            id="userName"
            type="text"
            onChange={(e) => onChangeHandler("userName", e.target.value)}
            value={userInput["userName"]}
          />
          <label htmlFor="age">User's age</label>
          <input
            id="age"
            type="numebr"
            onChange={(e) => onChangeHandler("age", e.target.value)}
            value={userInput["age"]}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
