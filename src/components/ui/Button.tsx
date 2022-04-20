import { Component, ReactNode } from "react";
import { ReactElement } from "react";
import styles from "./Button.module.css";

type Props = {
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  children: ReactElement | ReactElement[] | string;
};

class Button extends Component<Props, {}> {
  state = {};
  render(): ReactNode {
    return (
      <button
        className={styles.button}
        type={this.props.type || "button"}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
