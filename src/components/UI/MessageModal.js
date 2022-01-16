import { Fragment } from "react";
import classes from "./MessageModal.module.css";
import ReactDOM from "react-dom";

const ModalOverlay = (props) => {
  const modalClass = props.hasError
    ? classes.modal + " " + classes.error
    : classes.modal;

  return <div className={modalClass}>{props.message}</div>;
};

const MessageModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay message={props.message} hasError={props.hasError} />,
        document.querySelector("#message-root")
      )}
    </Fragment>
  );
};

export default MessageModal;
