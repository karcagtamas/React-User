import React from "react";
import Button from "./Button";
import Card from "./Card";

import styles from "./ErrorModal.module.css";

interface Props {
  title: string;
  message: string;
  onConfirm: () => void;
}

const ErrorModal = (props: Props) => {
  return (
    <React.Fragment>
      <div className={styles.backdrop} onClick={props.onConfirm}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button type="button" onClick={props.onConfirm}>
            Okay
          </Button>
        </footer>
      </Card>
    </React.Fragment>
  );
};

export default ErrorModal;
