import React, { Component } from "react";
import Button from "./Button";
import Card from "./Card";

import styles from "./ErrorModal.module.css";

type Props = {
  title: string;
  message: string;
  onConfirm: () => void;
};

class ErrorModal extends Component<Props, {}> {
  render(): React.ReactNode {
    return (
      <React.Fragment>
        <div className={styles.backdrop} onClick={this.props.onConfirm}></div>
        <Card className={styles.modal}>
          <header className={styles.header}>
            <h2>{this.props.title}</h2>
          </header>
          <div className={styles.content}>
            <p>{this.props.message}</p>
          </div>
          <footer className={styles.actions}>
            <Button type="button" onClick={this.props.onConfirm}>
              Okay
            </Button>
          </footer>
        </Card>
      </React.Fragment>
    );
  }
}

export default ErrorModal;
