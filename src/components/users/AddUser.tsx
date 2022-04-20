import React, { ChangeEvent, Component, FormEvent } from "react";
import { User } from "../../User.model";
import Button from "../ui/Button";
import Card from "../ui/Card";
import ErrorModal from "../ui/ErrorModal";
import styles from "./AddUser.module.css";

type Props = {
  onAddUser: (user: User) => void;
};

type State = {
  error: Error | null;
  username: string;
  age: number;
};

interface Error {
  title: string;
  message: string;
}

class AddUser extends Component<Props, State> {
  state: Readonly<State> = {
    error: null,
    username: "",
    age: 21,
  };

  render(): React.ReactNode {
    return (
      <React.Fragment>
        {this.state.error != null && (
          <ErrorModal
            title={this.state.error.title}
            message={this.state.error.message}
            onConfirm={this.errorHandler}
          />
        )}
        <Card className={styles.input}>
          <form onSubmit={this.addUserHandler}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              value={this.state.username}
              type="text"
              onChange={this.usernameChangeHandler}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              value={this.state.age}
              type="number"
              onChange={this.ageChangeHandler}
            />
            <Button type="submit">Add User</Button>
          </form>
        </Card>
      </React.Fragment>
    );
  }

  addUserHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (this.state.username.trim().length === 0 || this.state.age <= 0) {
      this.setState((prev) => {
        return {
          ...prev,
          error: {
            title: "Invalid input",
            message: "Stupid. Enter valid entries.",
          },
        };
      });

      return;
    }

    console.log(this.state.username, this.state.age);
    this.props.onAddUser({
      name: this.state.username,
      age: this.state.age,
      id: Math.random().toString(),
    });

    this.setState((prev) => {
      return { ...prev, username: "", age: 21 };
    });
  };

  errorHandler = () => {
    this.setState((prev) => {
      return { ...prev, error: null };
    });
  };

  usernameChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    this.setState((prev) => {
      return { ...prev, username: event.target.value };
    });

  ageChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    this.setState((prev) => {
      return { ...prev, age: +event.target.value };
    });
}

export default AddUser;
