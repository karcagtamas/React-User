import { useState } from "react";
import "./App.css";
import AddUser from "./components/users/AddUser";
import UserList from "./components/users/UserList";
import { User } from "./User.model";

function App() {
  const [users, setUsers] = useState([] as User[]);

  const addUserHandler = (user: User) => {
    setUsers((prev) => {
      return [...prev, user];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
