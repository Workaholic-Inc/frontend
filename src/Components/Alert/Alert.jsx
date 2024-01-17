import React, { useState } from "react";
import "./Alert.css";
import Modal from "react-modal";

const Alert = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      <button onClick={openModal}>show Modal</button>
      <Modal
        className="modal-1"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>{props.title}</h2>
        <p>{props.info}</p>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default Alert;
