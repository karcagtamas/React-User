import { Component, ReactNode } from "react";
import "./App.css";
import AddUser from "./components/users/AddUser";
import UserList from "./components/users/UserList";
import { User } from "./User.model";

type State = {
  users: User[];
};

class App extends Component<{}, State> {
  state: Readonly<State> = { users: [] };

  render(): ReactNode {
    return (
      <div>
        <AddUser onAddUser={this.addUserHandler} />
        <UserList users={this.state.users} />
      </div>
    );
  }

  addUserHandler(user: User) {
    this.setState((state) => {
      return {
        users: [...state.users, user],
      };
    });
  }
}

export default App;
