import React, { ReactElement } from "react";
import styles from "./Card.module.css";

interface Props {
  children: ReactElement | ReactElement[];
  className?: string;
}

const Card: React.FC<Props> = (props: Props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
