import React, { Component, ReactElement } from "react";
import styles from "./Card.module.css";

type Props = {
  children: ReactElement | ReactElement[];
  className?: string;
};

class Card extends Component<Props, {}> {
  render(): React.ReactNode {
    return (
      <div className={`${styles.card} ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
