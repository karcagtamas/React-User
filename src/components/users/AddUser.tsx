import React, { ChangeEvent, FormEvent, useState } from "react";
import { User } from "../../User.model";
import Button from "../ui/Button";
import Card from "../ui/Card";
import ErrorModal from "../ui/ErrorModal";
import styles from "./AddUser.module.css";

interface Props {
  onAddUser: (user: User) => void;
}

interface Error {
  title: string;
  message: string;
}

const AddUser: React.FC<Props> = (props: Props) => {
  const [error, setError] = useState(null as Error | null);

  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);

  const addUserHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username.trim().length === 0 || age <= 0) {
      setError({
        title: "Invalid input",
        message: "Stupid. Enter valid entries.",
      });
      return;
    }

    console.log(username, age);
    props.onAddUser({ name: username, age, id: Math.random().toString() });
    setUsername("");
    setAge(0);
  };

  const errorHandler = () => {
    setError(null);
  };

  const usernameChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);

  const ageChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setAge(Number(event.target.value));

  return (
    <React.Fragment>
      {error != null && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={username}
            type="text"
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            value={age}
            type="number"
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
