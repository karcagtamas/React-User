import { ReactElement } from "react";
import styles from "./Button.module.css";

interface Props {
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  children: ReactElement | ReactElement[] | string;
}

const Button = (props: Props) => {
  return (
    <button
      className={styles.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
