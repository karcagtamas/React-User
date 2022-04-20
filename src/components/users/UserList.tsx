import { User } from "../../User.model";
import Card from "../ui/Card";

import styles from "./UserList.module.css";

interface Props {
  users: User[];
}

const UserList = (props: Props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
