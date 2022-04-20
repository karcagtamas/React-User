import { Component, ReactNode } from "react";
import { User } from "../../User.model";
import Card from "../ui/Card";

import styles from "./UserList.module.css";

type Props = {
  users: User[];
};

class UserList extends Component<Props, {}> {
  render(): ReactNode {
    return (
      <Card className={styles.users}>
        <ul>
          {this.props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      </Card>
    );
  }
}

export default UserList;
