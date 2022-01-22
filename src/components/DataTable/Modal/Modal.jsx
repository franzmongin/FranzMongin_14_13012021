import React, { useState } from "react";

function Modal({ hiddenModal, sethiddenModal }) {
  return (
    <div
      className={`blocker ${
        hiddenModal === true ? "modal-hidden" : "modal-showed"
      }`}
    >
      <div
        id="confirmation"
        className={`modal ${
          hiddenModal === true ? "modal-hidden" : "modal-showed"
        }`}
      >
        Employee Created!
        <a
          href="#"
          className="close-modal"
          onClick={() => {
            sethiddenModal(true);
          }}
        >
          Close
        </a>
      </div>
    </div>
  );
}

export default Modal;
