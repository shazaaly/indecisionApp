import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
  className="modal"
    isOpen={!!props.selectedOption}
    contentLabel="Example Modal"
    onRequestClose={props.handleClearSelectedOption}
    closeTimeoutMS={200}
  >
    <h3 className="modal__title">Selected Option : </h3>
    {props.selectedOption && <p className="modal__body"> {props.selectedOption}</p>}
    <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
  </Modal>
);

export default OptionModal;
