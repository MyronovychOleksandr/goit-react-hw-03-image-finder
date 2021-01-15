import React, { Component } from "react";
import s from "./Modal.module.css";

class Modal extends Component {
  componentWillUnmount() {
    window.removeEventListener("keydown", this.props.onClose);
  }

  render() {
    return (
      <div className={s.overlay}>
        <div className={s.modal}>
          <img src={this.props.url} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
